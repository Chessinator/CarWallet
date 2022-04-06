package de.carwallet.backend.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserUpdateRequest {
    private String firstname;
    private String lastname;
    private String address;
    private String phone;
    private String pictureBase64;

}