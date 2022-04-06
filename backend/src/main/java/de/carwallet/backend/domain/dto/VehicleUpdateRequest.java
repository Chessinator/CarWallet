package de.carwallet.backend.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class VehicleUpdateRequest {
    private String make;
    private String model;
    private Integer year;
    private String vin;
    private String registrationNumber;
    private String description;
}
