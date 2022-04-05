package de.carwallet.backend.controller;

import de.carwallet.backend.domain.dto.VehicleCreateRequest;
import de.carwallet.backend.domain.dto.VehicleUpdateRequest;
import de.carwallet.backend.domain.model.User;
import de.carwallet.backend.domain.model.Vehicle;
import de.carwallet.backend.service.UserService;
import de.carwallet.backend.service.VehicleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api/vehicle")
public class VehicleController {

    private final VehicleService vehicleService;
    private final UserService userService;

    public VehicleController(VehicleService vehicleService, UserService userService) {
        this.vehicleService = vehicleService;
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<Vehicle> addVehicle(@RequestBody VehicleCreateRequest request) {
        User currentUser = getCurrentUser();
        if (currentUser == null){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
        return ResponseEntity.ok(vehicleService.addVehicle(request, currentUser));
    }

    @GetMapping
    public ResponseEntity<?> getVehicles(@RequestParam(value = "vehicle_id", required = false) Long id) {
        User currentUser = getCurrentUser();
        if (currentUser == null){
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
        }
        List<Vehicle> vehicleList = vehicleService.getVehicles(currentUser);
        if (id != null) {
            vehicleList = vehicleList.stream().filter(vehicle -> Objects.equals(vehicle.getId(), id)).collect(Collectors.toList());
        }
        return vehicleList.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(vehicleList);
    }

    @PatchMapping
    public ResponseEntity<Vehicle> updateVehicle(@RequestParam(value = "vehicle_id", required = true) Long id,
                                                 @RequestBody VehicleUpdateRequest request) {
        try {
            return ResponseEntity.ok(vehicleService.updateVehicle(id, request));
        } catch (EntityNotFoundException exception) {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping
    public ResponseEntity<?> deleteVehicle(@RequestParam(value = "vehicle_id", required = true) Long id) {
        try {
            vehicleService.deleteVehicle(id);
            return ResponseEntity.accepted().build();
        } catch (EntityNotFoundException exception) {
            return ResponseEntity.noContent().build();
        }
    }

    // UTILS
    private User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String email = authentication.getName();
            return userService.getUser(email);
        }
        return null;
    }
}
