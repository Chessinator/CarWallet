package de.carwallet.backend.domain.model;

import java.util.ArrayList;
import java.util.Collection;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

@Entity
@Table(name = "service_provider")
@JsonIgnoreProperties({"services"})
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ServiceProvider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String address;
    private String description;
    private String vatNumber;
    private String owner;

    @ElementCollection(targetClass = ServiceType.class)
    @CollectionTable
    @Enumerated(EnumType.STRING)
    private Collection<ServiceType> serviceTypes = new ArrayList<>();

    @OneToMany(targetEntity = Service.class, mappedBy = "serviceProvider", fetch = FetchType.LAZY)
    private Collection<Service> services = new ArrayList<>();
}

