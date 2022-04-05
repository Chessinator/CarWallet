package de.carwallet.backend.controller;

import de.carwallet.backend.domain.dto.UserUpdateRequest;
import de.carwallet.backend.domain.model.User;
import de.carwallet.backend.service.UserService;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import javax.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @Lazy
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<User> getUser() {
        String email = getEmailOfAuthenticatedUser();
        if (email == null) {
            return ResponseEntity.noContent().build();
        }
        try {
            return ResponseEntity.ok(userService.getUser(email));
        } catch (EntityNotFoundException exception) {
            return ResponseEntity.noContent().build();
        }
    }

    @PatchMapping
    public ResponseEntity<User> updateUser(@RequestBody UserUpdateRequest request) {
        String email = getEmailOfAuthenticatedUser();
        if (email == null) {
            return ResponseEntity.noContent().build();
        }
        try {
            return ResponseEntity.ok(userService.updateUser(email, request));
        } catch (EntityNotFoundException exception) {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping
    public ResponseEntity<?> deleteUser() {
        String email = getEmailOfAuthenticatedUser();
        if (email == null) {
            return ResponseEntity.noContent().build();
        }
        try {
            SecurityContextHolder.clearContext();
            userService.deleteUser(email);
            return ResponseEntity.accepted().build();
        } catch (EntityNotFoundException exception) {
            return ResponseEntity.noContent().build();
        }
    }

    // UTILS
    private String getEmailOfAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            return authentication.getName();
        }
        return null;
    }

}