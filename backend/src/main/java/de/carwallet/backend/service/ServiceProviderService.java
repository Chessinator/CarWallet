package de.carwallet.backend.service;

import de.carwallet.backend.domain.model.ServiceProvider;
import de.carwallet.backend.repository.ServiceProviderRepository;
import lombok.RequiredArgsConstructor;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceProviderService {

    private final ServiceProviderRepository serviceProviderRepository;

    public ServiceProvider getServiceProvider(Long id){
        return serviceProviderRepository.findById(id).orElse(null);
    }
}
