package de.carwallet.backend.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;

@Entity
@Table(name = "service")
@JsonIgnoreProperties({"vehicle"})
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column()
    private Long id;

    @ManyToOne(targetEntity = Vehicle.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicle_id", referencedColumnName = "id", nullable = false)
    private Vehicle vehicle;

    @ManyToOne(targetEntity = ServiceProvider.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "service_provider_id", referencedColumnName = "id", nullable = false)
    private ServiceProvider serviceProvider;

    private ServiceType serviceType;
    private ServiceStatus serviceStatus;
    private String dateMeeting;
    private String dateCompleted;
    private String description;
    private double priceEstimation;
    private double priceFinal;

}