package de.carwallet.backend;

import de.carwallet.backend.domain.dto.UserRegistrationRequest;
import de.carwallet.backend.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {
			userService.registerUser(new UserRegistrationRequest("john@test.de", "1234"));
			userService.registerUser(new UserRegistrationRequest("will@test.de", "1234"));
			userService.registerUser(new UserRegistrationRequest("jim@test.de", "1234"));
			userService.registerUser(new UserRegistrationRequest("arnold@test.de", "1234"));

			// DUMMY PROVIDER
		};
	}

}
