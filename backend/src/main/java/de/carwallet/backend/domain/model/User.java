package de.carwallet.backend.domain.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name = "user")
@JsonIgnoreProperties({"password", "roles", "vehicles"})
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String email;
    private String password;
    private String firstname;
    private String lastname;
    private String address;
    private String phone;
    @Column(length = 5000)
    private String pictureBase64;

    @ManyToMany
    private Collection<Role> roles = new ArrayList<>();

    // When we delete the user entity, our vehicle entity should .
    @OneToMany(targetEntity = Vehicle.class,
            mappedBy = "user",
            fetch = FetchType.EAGER,
            cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Collection<Vehicle> vehicles = new ArrayList<>();
}
