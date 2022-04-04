package de.carwallet.backend.domain.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class VehicleCreateRequest {
    private String make;
    private String model;
    private Integer year;
    private String vin;
    private String registrationNumber;
    private String description;
}