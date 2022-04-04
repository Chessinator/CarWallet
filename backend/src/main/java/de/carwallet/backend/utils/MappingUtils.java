package de.carwallet.backend.utils;

import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;

import java.beans.FeatureDescriptor;
import java.util.Arrays;
import java.util.stream.Collectors;

public class MappingUtils {
    private MappingUtils() {}

    public static String[] getNullPropertyNames(Object obj) {
        final BeanWrapper src = new BeanWrapperImpl(obj);
        return Arrays.stream(src.getPropertyDescriptors())
                .map(FeatureDescriptor::getName)
                .filter(name -> src.getPropertyValue(name) == null)
                .collect(Collectors.toList())
                .toArray(String[]::new);
    }
}
