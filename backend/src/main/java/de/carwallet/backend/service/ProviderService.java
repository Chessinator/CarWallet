package de.carwallet.backend.service;

import de.carwallet.backend.domain.model.Provider;
import de.carwallet.backend.repository.ProviderRepository;
import org.springframework.stereotype.Service;

@Service
public class ProviderService {

    ProviderRepository providerRepository;

    public Provider getById(Long id){
        return providerRepository.getById(id);
    }

}
