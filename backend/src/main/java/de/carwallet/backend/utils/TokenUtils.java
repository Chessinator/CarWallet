package de.carwallet.backend.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Date;
import java.util.stream.Collectors;

@Component
public class TokenUtils {

    private static String TOKEN_PREFIX;
    private static String TOKEN_ISSUER;
    private static Algorithm ALGORITHM;

    @Value("${security.token.prefix}")
    private String prefix;
    @Value("${security.token.secret}")
    private String secret;
    @Value("${security.token.issuer}")
    private String issuer;

    private TokenUtils() {
    }

    public static String getTokenPrefix() {
        return TOKEN_PREFIX;
    }

    public static String generateAccessToken(UserDetails user) {
        return JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 100 * 60 * 1000))
                .withIssuer(TOKEN_ISSUER)
                .withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .sign(ALGORITHM);
    }

    public static String generateRefreshToken(UserDetails user) {
        return JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 300 * 60 * 1000))
                .withIssuer(TOKEN_ISSUER)
                .sign(ALGORITHM);
    }

    public static String getSubjectFromToken(String token) {
        JWTVerifier verifier = JWT.require(ALGORITHM).build();
        DecodedJWT decodedJWT = verifier.verify(token);
        return decodedJWT.getSubject();
    }

    @PostConstruct
    private void init() {
        TOKEN_PREFIX = prefix;
        TOKEN_ISSUER = issuer;
        ALGORITHM = Algorithm.HMAC256(secret.getBytes());
    }
}
