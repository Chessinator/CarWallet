package de.carwallet.backend.controller;

import de.carwallet.backend.domain.dto.AppNewsRequest;
import de.carwallet.backend.domain.dto.ImportantNewsRequest;
import de.carwallet.backend.domain.dto.ServiceProviderNewsRequest;
import de.carwallet.backend.domain.model.ServiceProvider;
import de.carwallet.backend.service.ServiceProviderService;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

/*
    TODO:
    Note that this is more a mock than actual functionality.
    It has been implemented in a rather trivial way to offer the API endpoint,
    but it still needs the ServiceProvider and/or API management frontend to have any purpose.
 */

@RestController
@RequestMapping("/api/news")
public class NewsController {

    private final ServiceProviderService serviceProviderService;

    @Lazy
    public NewsController(ServiceProviderService serviceProviderService) {
        this.serviceProviderService = serviceProviderService;
    }

    @GetMapping("/important")
    public ResponseEntity<List<ImportantNewsRequest>> getImportantNews() {
        return ResponseEntity.ok(List.of(
                new ImportantNewsRequest(
                        "Work in Progress",
                        "This application is still work in progress.",
                        LocalDate.of(2022, 4,4))
        ));
    }

    @GetMapping("/app")
    public ResponseEntity<List<AppNewsRequest>> getAppNews() {
        return ResponseEntity.ok(List.of(
                new AppNewsRequest(
                        "Presentation",
                        "Today I will get presented =)",
                        LocalDate.of(2022, 4,8)),
                new AppNewsRequest(
                        "The day after Presentation",
                        "As yesterdays presentation sure will have gone well, we prepare for intense usage and can't guarantee stability with these excessive loads.",
                        LocalDate.of(2022, 4,9))
        ));
    }


    @GetMapping("/serviceprovider")
    public ResponseEntity<List<ServiceProviderNewsRequest>> getServiceProviderNews() {
        List<ServiceProvider> serviceProviders = serviceProviderService.findAll();
        var news = serviceProviders.stream().map(serviceProvider ->
                new ServiceProviderNewsRequest(
                        serviceProvider.getId(),
                        "Generic message (spId:" + serviceProvider.getId()+")",
                        "Generic news from\n"+serviceProvider.getAddress()+"\nfor "+serviceProvider.getServiceTypes(),
                        LocalDate.now())
        ).collect(Collectors.toList());
        return ResponseEntity.ok(news);
    }
}
