package de.carwallet.backend.service;


import de.carwallet.backend.domain.dto.ServiceCreateRequest;
import de.carwallet.backend.domain.dto.ServiceUpdateRequest;
import de.carwallet.backend.domain.model.Service;
import de.carwallet.backend.domain.model.ServiceProvider;
import de.carwallet.backend.domain.model.ServiceStatus;
import de.carwallet.backend.domain.model.Vehicle;
import de.carwallet.backend.repository.ServiceRepository;
import de.carwallet.backend.utils.MappingUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import javax.persistence.EntityNotFoundException;
import java.util.List;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceService {

    private final ServiceRepository serviceRepository;

    public Service addService(ServiceCreateRequest serviceCreateRequest,
                              ServiceProvider serviceProvider,
                              Vehicle vehicle){
        Service serviceToAdd = new Service();
        BeanUtils.copyProperties(serviceCreateRequest, serviceToAdd, MappingUtils.getNullPropertyNames(serviceCreateRequest));
        serviceToAdd.setVehicle(vehicle);
        serviceToAdd.setServiceProvider(serviceProvider);
        serviceToAdd.setServiceStatus(ServiceStatus.REQUESTED);
        return serviceRepository.save(serviceToAdd);
    }

    public Service getService(Long id){
        return serviceRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public List<Service> getServicesByServiceProviderId(Long serviceProviderId){
        return serviceRepository.findByServiceProviderId(serviceProviderId);
    }

    public List<Service> getServicesByVehicleId(Long vehicleId){
        return serviceRepository.findByVehicleId(vehicleId);
    }

    public Service updateService(Long id, ServiceUpdateRequest serviceUpdateRequest){
        Service serviceToUpdate = serviceRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        BeanUtils.copyProperties(serviceUpdateRequest, serviceToUpdate, MappingUtils.getNullPropertyNames(serviceUpdateRequest));
        return serviceRepository.save(serviceToUpdate);
    }
}
