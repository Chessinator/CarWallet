package de.carwallet.backend.service;


import de.carwallet.backend.domain.model.Service;
import de.carwallet.backend.repository.ProviderRepository;
import de.carwallet.backend.repository.ServiceRepository;
import de.carwallet.backend.repository.VehicleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;

import javax.persistence.EntityNotFoundException;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceService {
    private final ServiceRepository serviceRepository;
    private final VehicleRepository vehicleRepository;
    private final ProviderRepository providerRepository;

    public void save(Long vehicleId, Long providerId,Service service){
        Service serviceToCreate = new Service();
        BeanUtils.copyProperties(service, serviceToCreate);
        serviceToCreate.setVehicle(vehicleRepository.getById(vehicleId));
        serviceToCreate.setProvider(providerRepository.getById(providerId));
        serviceToCreate.setStatus(Service.ServiceStatus.REQUESTED);
        serviceRepository.save(serviceToCreate);
    }

    public Service getById(Long id){
        return serviceRepository.getById(id);
    }

    public Service findByVehicleId(Long id){
        return serviceRepository.findByVehicleId(id).orElseThrow(EntityNotFoundException::new);
    }

    public Service findByProviderId(Long id){
        return serviceRepository.findByProviderId(id).orElseThrow(EntityNotFoundException::new);
    }


}
