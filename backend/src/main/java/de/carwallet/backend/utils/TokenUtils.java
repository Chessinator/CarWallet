package de.carwallet.backend.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Date;
import java.util.stream.Collectors;

public class TokenUtils {

    private static final String TOKEN_PREFIX;
    private static final String TOKEN_SECRET_KEY;
    private static final String TOKEN_ISSUER;
    private static final Algorithm algorithm;

    static {
        TOKEN_PREFIX = "Bearer ";
        TOKEN_SECRET_KEY = "EIZWBF-BFGGCP-PVFVTX-MZDYTD-GGBWHJ-WOMKXP-VCYIHB-TEGIBI-GHLEOY-KIPLHF";
        TOKEN_ISSUER = "Car.Wallet";
        algorithm = Algorithm.HMAC256(TOKEN_SECRET_KEY.getBytes());
    }

    private TokenUtils() { }

    public static String getTokenPrefix(){
        return TOKEN_PREFIX;
    }

    public static String getSubjectFromToken(String token) {
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(token);
        return decodedJWT.getSubject();
    }

    public static String generateAccessToken(UserDetails user) {
        return JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 100 * 60 * 1000))
                .withIssuer(TOKEN_ISSUER)
                .withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .sign(algorithm);
    }

    public static String generateRefreshToken(UserDetails user) {
        return JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 300 * 60 * 1000))
                .withIssuer(TOKEN_ISSUER)
                .sign(algorithm);
    }
}
