package de.carwallet.backend.domain.model;

import java.util.Collection;
import javax.persistence.*;
import lombok.*;

@Entity
@Table(name = "service_provider")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ServiceProvider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String address;
    private String description;
    private String vatNumber;
    private String owner;
    private String acceptanceRules;
    @OneToMany
    private Collection<Service> services;
}

