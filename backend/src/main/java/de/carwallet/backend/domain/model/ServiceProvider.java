package de.carwallet.backend.domain.model;

import java.util.ArrayList;
import java.util.Collection;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.*;
import lombok.*;

@Entity
@Table(name = "service_provider")
@JsonInclude(JsonInclude.Include.NON_NULL)
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

    @OneToMany(targetEntity = Service.class,
            mappedBy = "serviceProvider",
            fetch = FetchType.LAZY,
            cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @JsonProperty("service_id")
    private Collection<Service> services = new ArrayList<>();
}

