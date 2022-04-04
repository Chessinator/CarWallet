package de.carwallet.backend.controller;

import java.util.List;

import de.carwallet.backend.domain.dto.ServiceCreateRequest;
import de.carwallet.backend.domain.model.ServiceProvider;
import de.carwallet.backend.domain.model.ServiceType;
import de.carwallet.backend.domain.model.Vehicle;
import de.carwallet.backend.repository.ServiceProviderRepository;
import de.carwallet.backend.service.ServiceProviderService;
import de.carwallet.backend.service.ServiceService;
import de.carwallet.backend.service.VehicleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import de.carwallet.backend.domain.model.Service;

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
    public ResponseEntity<Service> addService(@RequestBody ServiceCreateRequest request){
        Vehicle vehicle = vehicleService.getVehicle(request.getVehicleId());
        ServiceProvider serviceProvider = serviceProviderService.getServiceProvider(request.getServiceProviderId());
        if (vehicle == null || serviceProvider == null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(serviceService.addService(request, serviceProvider, vehicle));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Service> getService(@PathVariable Long id){
        return null;
    }

    @GetMapping("/types")
    public ResponseEntity<List<String>> getServiceTypes(){
        return null;
    }


    @GetMapping("/provider/{id}")
    public ResponseEntity<ServiceProvider> getProvider(@PathVariable Long id){
        return null;
    }

    @GetMapping("/provider")
    public ResponseEntity<List<ServiceProvider>> getServiceProviders(@RequestParam("service_type") ServiceType serviceType){
        List<ServiceProvider> serviceProviderList = serviceProviderService.getServiceProviders(serviceType);
        return serviceProviderList.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(serviceProviderList);
    }

}
