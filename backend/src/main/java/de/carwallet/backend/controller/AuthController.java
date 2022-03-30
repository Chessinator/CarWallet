package de.carwallet.backend.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.carwallet.backend.domain.model.User;
import de.carwallet.backend.security.CustomUserDetailsService;
import de.carwallet.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(path = "/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private final CustomUserDetailsService customUserDetailsService;
    private final String SECRET_KEY = "REPLACE_THIS_DUMMY_KEY_WITH_SECRET_KEY";
    private final String TOKEN_PREFIX = "Bearer ";

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/auth/register").toUriString());
        return ResponseEntity.created(uri).body(userService.save(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(HttpServletRequest request, HttpServletResponse response) {
        // TODO
        return null;
    }

    @GetMapping("/refresh-token")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        if (authorizationHeader != null && authorizationHeader.startsWith(TOKEN_PREFIX)) {
            try {
                String refresh_token = authorizationHeader.substring(TOKEN_PREFIX.length());
                DecodedJWT decodedJWT = getDecodedJWT(refresh_token);
                User user = (User) customUserDetailsService.loadUserByUsername(decodedJWT.getSubject());
                String access_token = generateToken(user.getEmail(),  10*60*1000L);

                Map<String, String> tokens = new HashMap<>();
                tokens.put("access_token", access_token);
                tokens.put("refresh_token", refresh_token);
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), tokens);

            } catch (Exception exception){
                response.setHeader("error" ,exception.getMessage());
                response.setStatus(FORBIDDEN.value());
                Map<String, String> error = new HashMap<>();
                error.put("error_message", exception.getMessage());
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), error);
            }
        } else {
            throw new RuntimeException("Refresh token is missing");
        }
    }

    // UTILS
    private String generateToken(String username, Long expirationTime ){
        return JWT.create()
                .withSubject(username)
                .withIssuedAt(new Date())
                .withExpiresAt(new Date(System.currentTimeMillis() + expirationTime))
                .sign(Algorithm.HMAC256(SECRET_KEY.getBytes()));
    }

    private DecodedJWT getDecodedJWT(String token){
        return JWT.require(Algorithm.HMAC256(SECRET_KEY.getBytes())).build().verify(token);
    }
}
