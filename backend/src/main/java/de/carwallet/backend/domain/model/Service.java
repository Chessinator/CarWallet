package de.carwallet.backend.domain.model;

import com.fasterxml.jackson.annotation.*;
import lombok.*;
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
    @Column()
    private Long id;

    @ManyToOne(targetEntity = Vehicle.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicle_id", referencedColumnName = "id", nullable = false)
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @JsonProperty("vehicle_id")
    private Vehicle vehicle;

    @ManyToOne(targetEntity = ServiceProvider.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "service_provider_id", referencedColumnName = "id", nullable = false)
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @JsonProperty("service_provider_id")
    private ServiceProvider serviceProvider;

    private ServiceType serviceType;
    private ServiceStatus serviceStatus;
    private String dateMeeting;
    private String dateCompleted;
    private String description;
    private double priceEstimation;
    private double priceFinal;

}