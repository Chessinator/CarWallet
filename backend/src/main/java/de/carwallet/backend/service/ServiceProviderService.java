package de.carwallet.backend.service;

import de.carwallet.backend.domain.model.ServiceProvider;
import de.carwallet.backend.domain.model.ServiceType;
import de.carwallet.backend.repository.ServiceProviderRepository;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@org.springframework.stereotype.Service
public class ServiceProviderService {

    private final ServiceProviderRepository serviceProviderRepository;

    public ServiceProviderService(ServiceProviderRepository serviceProviderRepository) {
        this.serviceProviderRepository = serviceProviderRepository;
    }

    public ServiceProvider getServiceProvider(Long id){
        return serviceProviderRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public List<ServiceProvider> getServiceProviders(ServiceType serviceType) throws MethodArgumentTypeMismatchException {
        return serviceProviderRepository.findByServiceTypes(serviceType);
    }

    public List<ServiceProvider> findAll() {
        return serviceProviderRepository.findAll();
    }
}
