package de.carwallet.backend;

import de.carwallet.backend.domain.dto.RegistrationRequest;
import de.carwallet.backend.domain.model.User;
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
	CommandLineRunner run(UserService userService){
		return args -> {
			userService.registerUser(new RegistrationRequest("user@test.de", "testPW1!", "Hans", "Peter"));
		};
	}
}
