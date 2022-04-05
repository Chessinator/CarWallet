package de.carwallet.backend.service;

import de.carwallet.backend.domain.dto.UserRegistrationRequest;
import de.carwallet.backend.domain.dto.UserUpdateRequest;
import de.carwallet.backend.domain.model.User;
import de.carwallet.backend.repository.RoleRepository;
import de.carwallet.backend.repository.UserRepository;
import de.carwallet.backend.utils.MappingUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityNotFoundException;

@Service
@Transactional
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Lazy
    public UserService(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User fetchedUser = this.userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("User %s not found", email)));
        return org.springframework.security.core.userdetails.User
                .withUsername(fetchedUser.getEmail())
                .password(fetchedUser.getPassword())
                .authorities(MappingUtils.mapRolesToAuthorities(fetchedUser.getRoles()))
                .build();
    }

    public User registerUser(UserRegistrationRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            request.setPassword("*****");
            throw new EmailAlreadyExistsException(String.format("User already exists: %s", request));
        }
        User userToCreate = new User();
        BeanUtils.copyProperties(request, userToCreate, MappingUtils.getNullPropertyNames(request));
        userToCreate.setPassword(passwordEncoder.encode(request.getPassword()));
        userToCreate.getRoles().add(roleRepository.findByName("USER"));
        return userRepository.save(userToCreate);
    }

    public User getUser(String email) {
        return this.userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("User %s not found", email)));
    }

    public User updateUser(String email, UserUpdateRequest request) {
        User userToUpdate = userRepository.findByEmail(email)
                .orElseThrow(EntityNotFoundException::new);
        BeanUtils.copyProperties(request, userToUpdate, MappingUtils.getNullPropertyNames(request));
        return this.userRepository.save(userToUpdate);
    }

    public void deleteUser(String email) {
        User userToDelete = userRepository.findByEmail(email)
                .orElseThrow(EntityNotFoundException::new);
        userRepository.delete(userToDelete);
    }

    // EXCEPTIONS
    private static class EmailAlreadyExistsException extends RuntimeException {
        public EmailAlreadyExistsException(String message) {
            super(message);
        }
    }
}
