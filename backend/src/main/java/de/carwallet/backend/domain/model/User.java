package de.carwallet.backend.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;
    private String password;

    private String firstname;
    private String lastname;
  //  @Transient
   // private Address address;
    private String phone;
    private String pictureBase64;

    @OneToMany(fetch = FetchType.LAZY)
    private Collection<Vehicle> vehicles;

    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Role> roles;
}
