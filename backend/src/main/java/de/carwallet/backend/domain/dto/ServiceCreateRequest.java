package de.carwallet.backend.domain.dto;

import de.carwallet.backend.domain.model.ServiceProvider;
import de.carwallet.backend.domain.model.ServiceType;
import de.carwallet.backend.domain.model.Vehicle;
import lombok.Data;

@Data
public class ServiceCreateRequest {
    private Vehicle vehicle;
    private ServiceProvider serviceProvider;
    private ServiceType serviceType;
    private String dateMeeting;
    private String description;
}
