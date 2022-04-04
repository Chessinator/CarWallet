package de.carwallet.backend.service;

import de.carwallet.backend.domain.model.Service;
import de.carwallet.backend.domain.model.ServiceProvider;
import de.carwallet.backend.domain.model.Vehicle;
import de.carwallet.backend.repository.ServiceRepository;
import lombok.RequiredArgsConstructor;

import java.util.Collection;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceService {

    private final ServiceRepository serviceRepository;

    // CRUD
    public Service createService(Service service) {
        return serviceRepository.save(service);
    }

    public Service getService(Long id) {
        return serviceRepository.getById(id);
    }

    public Collection<Service> getServices(Vehicle vehicle) {
        return serviceRepository.findByVehicle(vehicle);
    }

    public Collection<Service> getServices(ServiceProvider serviceProvider) {
        return serviceRepository.findByServiceProvider(serviceProvider);
    }

    // TODO Long id, Service DTO
    public Service updateService(Long id, Service dtoService) {
        return null;
    }
}