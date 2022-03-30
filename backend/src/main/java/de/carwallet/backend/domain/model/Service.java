package de.carwallet.backend.domain.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table(name = "service")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Vehicle vehicle;
    @ManyToOne
    private Provider provider;

    private ServiceType serviceType;
    private ServiceStatus status;
    private String dateMeeting;
    private String dateCompleted;
    private String description;
    private double priceEstimation;
    private double priceFinal;

    public enum ServiceType {INSPECTION, REPAIR, INSURANCE}
    public enum ServiceStatus {REQUESTED, SUGGESTED, REJECTED, ACCEPTED, WORKING, COMPLETED, CONFLICT, FAILED}

}
