package de.carwallet.backend.domain.dto;

import lombok.Data;

@Data
public class ServiceCreateRequest {
    private Long vehicleId;
    private Long serviceProviderId;
    private String serviceType;
    private String dateMeeting;
    private String description;

}
