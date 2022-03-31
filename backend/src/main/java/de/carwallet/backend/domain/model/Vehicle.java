package de.carwallet.backend.domain.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "vehicle")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String make;
    private String model;
    private Date year;
    private String vin;
    private String registrationNumber;
    //private Collection<String> pictureBase64;
    private String description;

//    @ManyToOne
//    private User user;
//    @OneToMany
//    private Collection<Service> services = new ArrayList<>();
}
