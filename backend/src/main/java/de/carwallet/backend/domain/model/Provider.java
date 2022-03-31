package de.carwallet.backend.domain.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "provider")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Address address;
    private String description;
    private String vatNumber;
    private String owner;
    private String acceptanceRules;

    @OneToMany
    private Collection<Service> services;
}