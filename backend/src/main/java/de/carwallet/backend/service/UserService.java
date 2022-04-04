package de.carwallet.backend.service;

import de.carwallet.backend.domain.dto.UserRegistrationRequest;
import de.carwallet.backend.domain.dto.UserUpdateRequest;
import de.carwallet.backend.domain.model.Role;
import de.carwallet.backend.domain.model.User;
import de.carwallet.backend.repository.UserRepository;
import de.carwallet.backend.utils.MappingUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.beans.FeatureDescriptor;
import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

@Service
@Transactional
@Slf4j
public class UserService  implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Lazy
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

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

    public User registerUser(UserRegistrationRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            request.setPassword("*****");
            throw new EmailAlreadyExistsException(String.format("User already exists: %s", request));
        }
        User userToCreate = new User();
        BeanUtils.copyProperties(request, userToCreate, getNullPropertyNames(request));
        userToCreate.setPassword(passwordEncoder.encode(request.getPassword()));
        //TODO add default Role to user
        return userRepository.save(userToCreate);
    }

    public User getUser(String email){
        return this.userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("User %s not found", email)));
    }

    public User updateUser(Long id, UserUpdateRequest request){
        User userToUpdate = userRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        BeanUtils.copyProperties(request, userToUpdate, MappingUtils.getNullPropertyNames(request));
        return this.userRepository.save(userToUpdate);
    }

    public void deleteUser(Long id) {
        User userToDelete = userRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        userRepository.delete(userToDelete);
    }

    //UTILS
    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }

    private String[] getNullPropertyNames(Object obj) {
        final BeanWrapper src = new BeanWrapperImpl(obj);
        return Arrays.stream(src.getPropertyDescriptors())
                .map(FeatureDescriptor::getName)
                .filter(name -> src.getPropertyValue(name) == null)
                .collect(Collectors.toList())
                .toArray(String[]::new);
    }

    // EXCEPTIONS
    private static class EmailAlreadyExistsException extends RuntimeException {
        public EmailAlreadyExistsException(String message) {
            super(message);
        }
    }
}
