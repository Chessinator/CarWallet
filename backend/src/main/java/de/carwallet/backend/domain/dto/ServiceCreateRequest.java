package de.carwallet.backend.domain.dto;

import de.carwallet.backend.domain.model.ServiceType;
import lombok.Data;

@Data
public class ServiceCreateRequest {
    private Long vehicleId;
    private Long serviceProviderId;
    private ServiceType serviceType;
    private String dateMeeting;
    private String description;

}
