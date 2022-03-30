package de.carwallet.backend.domain.model;

import lombok.Data;

@Data
public class Address {
    private String country, town, zip, street;
}