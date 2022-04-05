package de.carwallet.backend.domain.dto;

import de.carwallet.backend.domain.model.ServiceStatus;
import lombok.Data;

@Data
public class ServiceUpdateRequest {
    private ServiceStatus serviceStatus;
    private String dateMeeting;
    private String dateCompleted;
    private String description;
    private double priceEstimation;
    private double priceFinal;
}
