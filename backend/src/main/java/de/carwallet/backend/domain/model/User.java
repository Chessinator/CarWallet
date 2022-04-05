package de.carwallet.backend.domain.model;

import lombok.*;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name = "user")
@JsonIgnoreProperties({"password", "roles", "vehicles"})
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
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
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Collection<Vehicle> vehicles = new ArrayList<>();
}
