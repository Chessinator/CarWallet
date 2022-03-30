package de.carwallet.backend.domain.dto;

import de.carwallet.backend.domain.model.Address;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class RegistrationRequest {
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private Address address;
    private String phone;
    private String pictureBase64;
}
