package de.carwallet.backend.service;

import de.carwallet.backend.domain.dto.ServiceCreateRequest;
import de.carwallet.backend.domain.model.Service;
import de.carwallet.backend.domain.model.ServiceProvider;
import de.carwallet.backend.domain.model.Vehicle;
import de.carwallet.backend.repository.ServiceRepository;
import de.carwallet.backend.utils.MappingUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;

import java.util.List;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceService {

    private final ServiceRepository serviceRepository;

    //CRUD
    public Service addService(ServiceCreateRequest serviceCreateRequest, ServiceProvider serviceProvider, Vehicle vehicle){
        Service serviceToAdd = new Service();
        BeanUtils.copyProperties(serviceCreateRequest, serviceToAdd, MappingUtils.getNullPropertyNames(serviceCreateRequest));
        serviceToAdd.setVehicle(vehicle);
        serviceToAdd.setServiceProvider(serviceProvider);
        return serviceRepository.save(serviceToAdd);
    }

    public Service getService(Long id){
        return serviceRepository.getById(id);
    }

    public List<Service> getServices(Vehicle vehicle){
        return serviceRepository.findByVehicle(vehicle);
    }

    public List<Service> getServices(ServiceProvider serviceProvider){
        return serviceRepository.findByServiceProvider(serviceProvider);
    }

    // TODO Long id, Service DTO
    public Service updateService(Long id, Service service){
        return null;
    }
}
