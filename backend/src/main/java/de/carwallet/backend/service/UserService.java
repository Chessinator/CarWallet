package de.carwallet.backend.service;

import de.carwallet.backend.domain.dto.RegistrationRequest;
import de.carwallet.backend.domain.model.User;
import de.carwallet.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    public User registerUser(RegistrationRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            request.setPassword("************");
            throw new RuntimeException(String.format("User already exists %s", request));
        }

        User user = new User();
        BeanUtils.copyProperties(request, user, "password");
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        return userRepository.save(user);
    }


    public User getById(Long id) {
        return userRepository.getById(id);
    }

    public User updateProfile(Long id, User user) {
        User userToUpdate = userRepository.getById(id);
        BeanUtils.copyProperties(user, userToUpdate);
        return userRepository.save(userToUpdate);
    }

    public User updatePicture(Long id, String pictureBase64) {
        User userToUpdate = userRepository.getById(id);
        userToUpdate.setPictureBase64(pictureBase64);
        return userRepository.save(userToUpdate);
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }

}
