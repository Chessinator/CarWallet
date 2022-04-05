package de.carwallet.backend.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@Setter
@ToString
public class UserUpdateRequest {
    private String firstname;
    private String lastname;
    private String address;
    private String phone;
    private String pictureBase64;

}