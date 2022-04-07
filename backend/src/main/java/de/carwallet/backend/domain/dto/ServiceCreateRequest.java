package de.carwallet.backend.domain.dto;

import de.carwallet.backend.domain.model.ServiceType;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ServiceCreateRequest {
    private ServiceType serviceType;
    private String dateMeeting;
    private String description;
}
