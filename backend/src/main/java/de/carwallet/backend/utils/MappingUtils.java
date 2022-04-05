package de.carwallet.backend.utils;

import de.carwallet.backend.domain.model.Role;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.beans.FeatureDescriptor;
import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;

public class MappingUtils {

    private MappingUtils() {   }

    public static String[] getNullPropertyNames(Object obj) {
        final BeanWrapper src = new BeanWrapperImpl(obj);
        return Arrays.stream(src.getPropertyDescriptors())
                .map(FeatureDescriptor::getName)
                .filter(name -> src.getPropertyValue(name) == null)
                .collect(Collectors.toList())
                .toArray(String[]::new);
    }

    public static Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }
}
