package de.carwallet.backend.security;

import de.carwallet.backend.domain.model.Role;
import de.carwallet.backend.domain.model.User;
import de.carwallet.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    //API
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // Fetch user by email from the DB or throw exception when user does not exist.
        User fetchedUser = this.userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("User %s not found", email)));

        // Return a UserDetails object using the fetched User information
        return org.springframework.security.core.userdetails.User
                .withUsername(fetchedUser.getEmail())
                .password(fetchedUser.getPassword())
                .authorities(mapRolesToAuthorities(fetchedUser.getRoles()))
                .build();
    }

    // UTILS
    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }
}
