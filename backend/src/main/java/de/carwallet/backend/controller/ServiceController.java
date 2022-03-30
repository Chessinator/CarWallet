package de.carwallet.backend.controller;

import de.carwallet.backend.domain.model.Provider;
import de.carwallet.backend.domain.model.Service;
import de.carwallet.backend.service.ProviderService;
import de.carwallet.backend.service.ServiceService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/service")
public class ServiceController {

    ServiceService serviceService;
    ProviderService providerService;

    @GetMapping("/{id}")
    public Service getService(Long id){
        return null;
    }

    @GetMapping("/types")
    public List<String> getServiceTypes(){
        return null;
    }


    @GetMapping("/provider/{id}")
    public Provider getProviderById(@PathVariable Long id){
        return providerService.getById(id);
    }

    @GetMapping("/provider/{serviceType}")
    public List<Provider> getProvidersByType(@PathVariable String type){
        return null;
    }



}
