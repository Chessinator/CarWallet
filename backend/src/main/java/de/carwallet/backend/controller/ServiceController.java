package de.carwallet.backend.controller;

import de.carwallet.backend.domain.dto.ServiceCreateRequest;
import de.carwallet.backend.domain.dto.ServiceUpdateRequest;
import de.carwallet.backend.domain.model.*;
import de.carwallet.backend.repository.ServiceProviderRepository;
import de.carwallet.backend.service.ServiceProviderService;
import de.carwallet.backend.service.ServiceService;
import de.carwallet.backend.service.VehicleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/service")
public class ServiceController {

    private final ServiceService serviceService;
    private final VehicleService vehicleService;
    private final ServiceProviderService serviceProviderService;

    public ServiceController(ServiceService serviceService, VehicleService vehicleService, ServiceProviderService serviceProviderService) {
        this.serviceService = serviceService;
        this.vehicleService = vehicleService;
        this.serviceProviderService = serviceProviderService;
    }

    // CRUD
    @PostMapping
    public ResponseEntity<Service> addService(@RequestParam(value = "vehicle_id" ,required = true) Long vehicleId,
                                              @RequestParam(value = "provider_id", required = true) Long providerId,
                                              @RequestBody ServiceCreateRequest request) {
        try {
            Vehicle vehicle = vehicleService.getVehicle(vehicleId);
            ServiceProvider serviceProvider = serviceProviderService.getServiceProvider(providerId);
        return ResponseEntity.ok(serviceService.addService(request, serviceProvider, vehicle));
        } catch (EntityNotFoundException exception){
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping
    public ResponseEntity<Service> getService(@RequestParam(value = "service_id", required = true) Long id) {
        try {
            return ResponseEntity.ok(serviceService.getService(id));
        } catch (EntityNotFoundException exception){
            return ResponseEntity.noContent().build();
        }
    }

    @PatchMapping
    public ResponseEntity<Service> updateService(@RequestParam(value = "service_id", required = true) Long id,
                                                 @RequestBody ServiceUpdateRequest request){
        try {
            return ResponseEntity.ok(serviceService.updateService(id, request));
        } catch (EntityNotFoundException exception){
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/status")
    public ResponseEntity<List<String>> getServiceStatus() {
        return ResponseEntity.ok(Arrays.stream(ServiceStatus.values()).map(Objects::toString).collect(Collectors.toList()));
    }

    @GetMapping("/types")
    public ResponseEntity<List<String>> getServiceTypes() {
        return ResponseEntity.ok(Arrays.stream(ServiceType.values()).map(Objects::toString).collect(Collectors.toList()));
    }

    @GetMapping("/provider")
    public ResponseEntity<List<ServiceProvider>> getServiceProviders(@RequestParam(value = "service_id", required = false) Long id,
                                                                     @RequestParam(value = "service_type", required = false) ServiceType serviceType) {
        List<ServiceProvider> serviceProviderList = new ArrayList<>();
        try {
            if (id != null) {
                serviceProviderList.add(serviceProviderService.getServiceProvider(id));
            } else if (serviceType != null) {
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
