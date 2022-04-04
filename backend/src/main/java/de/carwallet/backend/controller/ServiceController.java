package de.carwallet.backend.controller;

import de.carwallet.backend.domain.dto.ServiceCreateRequest;
import de.carwallet.backend.domain.model.Service;
import de.carwallet.backend.domain.model.ServiceProvider;
import de.carwallet.backend.domain.model.Vehicle;
import de.carwallet.backend.service.ServiceProviderService;
import de.carwallet.backend.service.ServiceService;
import de.carwallet.backend.service.VehicleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/service")
@RequiredArgsConstructor
public class ServiceController {

    private final ServiceService serviceService;
    private final VehicleService vehicleService;
    private final ServiceProviderService serviceProviderService;

    // CRUD
    @PostMapping
    public ResponseEntity<Service> createService(@RequestBody ServiceCreateRequest request){
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

    @GetMapping("/provider/{serviceType}")
    public ResponseEntity<List<ServiceProvider>> getProviders(@PathVariable String serviceType){
        return null;
    }

}
