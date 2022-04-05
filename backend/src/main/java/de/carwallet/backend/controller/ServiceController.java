package de.carwallet.backend.controller;

import de.carwallet.backend.domain.dto.ServiceCreateRequest;
import de.carwallet.backend.domain.model.Service;
import de.carwallet.backend.domain.model.ServiceProvider;
import de.carwallet.backend.domain.model.ServiceType;
import de.carwallet.backend.domain.model.Vehicle;
import de.carwallet.backend.repository.ServiceProviderRepository;
import de.carwallet.backend.service.ServiceProviderService;
import de.carwallet.backend.service.ServiceService;
import de.carwallet.backend.service.VehicleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/api/service")
@RequiredArgsConstructor
public class ServiceController {

    private final ServiceService serviceService;
    private final VehicleService vehicleService;
    private final ServiceProviderService serviceProviderService;
    private final ServiceProviderRepository serviceProviderRepository;

    // CRUD
    @PostMapping
    public ResponseEntity<Service> addService(@RequestBody ServiceCreateRequest request) {
        Vehicle vehicle = vehicleService.getVehicle(request.getVehicleId());
        ServiceProvider serviceProvider = serviceProviderService.getServiceProvider(request.getServiceProviderId());
        if (vehicle == null || serviceProvider == null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(serviceService.addService(request, serviceProvider, vehicle));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Service> getService(@PathVariable Long id) {
        return null;
    }

    @GetMapping("/types")
    public ResponseEntity<List<String>> getServiceTypes() {
        return ResponseEntity.ok(Arrays.stream(ServiceType.values()).map(Objects::toString).collect(Collectors.toList()));
    }

    @GetMapping("/provider")
    public ResponseEntity<List<ServiceProvider>> getServiceProviders(@RequestParam(value = "service_id", required = false) Long id,
                                                                     @RequestParam(value = "service_type", required = false) ServiceType serviceType) {
        List<ServiceProvider> serviceProviderList = new ArrayList<>();
        try{
            if (id != null){
                serviceProviderList.add(serviceProviderService.getServiceProvider(id));
            } else if (serviceType != null){
                serviceProviderList.addAll(serviceProviderService.getServiceProviders(serviceType));
            }
            return serviceProviderList.isEmpty()
                    ? ResponseEntity.noContent().build()
                    : ResponseEntity.ok(serviceProviderList);
        } catch (EntityNotFoundException entityNotFoundException) {
            return ResponseEntity.noContent().build();
        }
    }

}
