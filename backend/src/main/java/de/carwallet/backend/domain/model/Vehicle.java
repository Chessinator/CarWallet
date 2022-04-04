package de.carwallet.backend.domain.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import org.springframework.hateoas.server.core.Relation;
import javax.persistence.*;

@Entity
@Table(name = "vehicle")
@Relation(collectionRelation = "vehicles", itemRelation = "vehicle")
@JsonInclude(JsonInclude.Include.NON_NULL)
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
    private Integer year;
    private String vin;
    private String registrationNumber;
    private String description;
    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinTable(name = "vehicle_user",
//            joinColumns = {@JoinColumn(name = "vehicle_id", referencedColumnName = "id")},
//            inverseJoinColumns = {@JoinColumn(name = "user_id" ,referencedColumnName = "id")})
    @JoinColumn(name = "user_id")
    private User user;
}
