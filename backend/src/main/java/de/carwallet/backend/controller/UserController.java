package de.carwallet.backend.controller;

import javax.persistence.EntityNotFoundException;

import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import de.carwallet.backend.domain.model.User;
import de.carwallet.backend.service.UserService;

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
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof AnonymousAuthenticationToken) {
            return ResponseEntity.noContent().build();
        }
        try {
            String email = authentication.getName();
            return ResponseEntity.ok(userService.getUser(email));
        } catch (EntityNotFoundException exception) {
            return ResponseEntity.noContent().build();
        }
    }

    @PatchMapping
    public ResponseEntity<User> updateUser(@RequestBody UserUpdateRequest request) {
        
    }

    @DeleteMapping
    public ResponseEntity<?> deleteUser(@RequestParam Long id){
        try {
            userService.deleteUser(id);
            return ResponseEntity.accepted().build();
        } catch (EntityNotFoundException exception) {
            return ResponseEntity.noContent().build();
        }
    }



//     READ: / (read user data)
//     DELETE: / (user deletion)
//     UPDATE: profile/ (change in user details i.e. firstname)
//     UPDATE: picture/
//     DELETE: picture/


}