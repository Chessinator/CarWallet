package de.carwallet.backend.controller;

import de.carwallet.backend.domain.model.Vehicle;
import de.carwallet.backend.service.VehicleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicle")
public class VehicleController {

    VehicleService vehicleService;

    @PostMapping("/")
    public Vehicle addNewVehicle(@RequestBody Vehicle vehicle){
        return vehicleService.create(vehicle);
    }

    @GetMapping("/")
    public List<Vehicle> getVehicles(){
        return vehicleService.getAll();
    }

    @GetMapping("/{id}")
    public Vehicle getVehicle(@PathVariable Long id){
        return vehicleService.getById(id);
    }
}
