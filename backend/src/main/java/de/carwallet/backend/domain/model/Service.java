package de.carwallet.backend.domain.model;

import javax.persistence.*;
import lombok.*;

@Entity
@Table(name = "service")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Vehicle vehicle;
    @ManyToOne
    private ServiceProvider serviceProvider;

    private ServiceType serviceType;
    private ServiceStatus serviceStatus;
    private String dateMeeting;
    private String dateCompleted;
    private String description;
    private double priceEstimation;
    private double priceFinal;

    public enum ServiceType {
        INSPECTION, REPAIR, INSURANCE
    }

    public enum ServiceStatus {
        REQUESTED, SUGGESTED, REJECTED, ACCEPTED, WORKING, COMPLETED, CONFLICT, FAILED
    }
    
}