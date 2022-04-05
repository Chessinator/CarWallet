package de.carwallet.backend;

import de.carwallet.backend.domain.dto.UserRegistrationRequest;
import de.carwallet.backend.domain.model.Role;
import de.carwallet.backend.domain.model.ServiceProvider;
import de.carwallet.backend.domain.model.ServiceType;
import de.carwallet.backend.repository.RoleRepository;
import de.carwallet.backend.repository.ServiceProviderRepository;
import de.carwallet.backend.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Collections;
import java.util.List;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    CommandLineRunner run(UserService userService,
                          ServiceProviderRepository serviceProviderRepository,
                          RoleRepository roleRepository) {
        return args -> {

            // CREATE DEFAULT ROLES
            roleRepository.save(new Role(null, "USER"));
            roleRepository.save(new Role(null, "ADMIN"));
            // CREATE DUMMY PROVIDERS
            serviceProviderRepository.save(new ServiceProvider(
                            null,
                            "Fritz Felgenflicker",
                            "Street 124, 38444, Wolfsburg, Germany",
                            "We fix your rims like real professionals daily availability just call us or " +
                                    "schedule a meething through CarWallet we also serve cake",
                            "DE1233546743",
                            "Fritz Felge",
                            List.of(ServiceType.REPAIR, ServiceType.INSPECTION),
                            Collections.emptyList()
                    )
            );
            serviceProviderRepository.save(new ServiceProvider(
                            null,
                            "Martha Maulschlüssel",
                            "Am Ring 24, 88888, Sometown, Germany",
                            "coming soon",
                            "DE5533423321",
                            "Martha Schmidt",
                            List.of(ServiceType.INSPECTION),
                            Collections.emptyList()
                    )
            );
            serviceProviderRepository.save(new ServiceProvider(
                            null,
                            "Basic Repairshop",
                            "Corner 13, 38443, Wolfsburg, Germany",
                            "We are a traditional generic repair shop",
                            "DE23452452343",
                            "Klara & Thorsten Schubert",
                            List.of(ServiceType.REPAIR),
                            Collections.emptyList()
                    )
            );

            // CREATE DUMMY USER
            userService.registerUser(new UserRegistrationRequest("john@test.de", "1234"));
            userService.registerUser(new UserRegistrationRequest("will@test.de", "1234"));
            userService.registerUser(new UserRegistrationRequest("jim@test.de", "1234"));
            userService.registerUser(new UserRegistrationRequest("arnold@test.de", "1234"));
        };
    }

}
