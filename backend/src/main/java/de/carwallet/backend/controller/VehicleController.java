package de.carwallet.backend.controller;

import de.carwallet.backend.domain.dto.VehicleCreateRequest;
import de.carwallet.backend.domain.model.User;
import de.carwallet.backend.domain.model.Vehicle;
import de.carwallet.backend.service.UserService;
import de.carwallet.backend.service.VehicleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.beans.FeatureDescriptor;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@Slf4j
public class VehicleController {

    private final VehicleService vehicleService;
    private final UserService userService;

    @GetMapping("/api/vehicle")
    public ResponseEntity<CollectionModel<Vehicle>> getVehicles(){
        User currentUser = getCurrentUser();
        List<Vehicle> vehicleList = vehicleService.getVehicles(currentUser);
        log.info("current user {}", currentUser);

        return vehicleList.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(CollectionModel.of(vehicleList));
    }

    @GetMapping("/api/vehicle/{id}")
    public ResponseEntity<Vehicle> getVehicle(@PathVariable Long id){
        return ResponseEntity.ok(vehicleService.getVehicle(id));
    }

    @PostMapping("/api/vehicle")
    public ResponseEntity<Vehicle> addVehicle(@RequestBody VehicleCreateRequest request){
        Vehicle vehicleToAdd = new Vehicle();
        BeanUtils.copyProperties(request, vehicleToAdd, getNullPropertyNames(request));
        vehicleToAdd.setUser(getCurrentUser());

        log.info("added vehicle {}", vehicleToAdd);
        return ResponseEntity.ok(vehicleService.addVehicle(vehicleToAdd));
    }

    // DELETE VEHICLE

    // UTILS
    private User getCurrentUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(!(authentication instanceof AnonymousAuthenticationToken)){
            String email = authentication.getName();
            return userService.getUser(email);
        }
        return null;
    }

    private String[] getNullPropertyNames(Object obj) {
        final BeanWrapper src = new BeanWrapperImpl(obj);
        return Arrays.stream(src.getPropertyDescriptors())
                .map(FeatureDescriptor::getName)
                .filter(name -> src.getPropertyValue(name) == null)
                .collect(Collectors.toList())
                .toArray(String[]::new);
    }


}
