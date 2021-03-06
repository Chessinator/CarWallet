package de.carwallet.backend.service;


import de.carwallet.backend.domain.dto.VehicleCreateRequest;
import de.carwallet.backend.domain.dto.VehicleUpdateRequest;
import de.carwallet.backend.domain.model.User;
import de.carwallet.backend.domain.model.Vehicle;
import de.carwallet.backend.repository.VehicleRepository;
import de.carwallet.backend.utils.MappingUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;

    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    public Vehicle addVehicle(VehicleCreateRequest vehicle, User user) {
        Vehicle vehicleToAdd = new Vehicle();
        BeanUtils.copyProperties(vehicle, vehicleToAdd, MappingUtils.getNullPropertyNames(vehicle));
        vehicleToAdd.setUser(user);
        return vehicleRepository.save(vehicleToAdd);
    }

    public Vehicle getVehicle(Long id) {
        return vehicleRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public List<Vehicle> getVehicles(User user) {
        return vehicleRepository.findByUser(user);
    }

    public Vehicle updateVehicle(Long id, VehicleUpdateRequest vehicle) {
        Vehicle vehicleToUpdate = vehicleRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        BeanUtils.copyProperties(vehicle, vehicleToUpdate, MappingUtils.getNullPropertyNames(vehicle));
        return vehicleRepository.save(vehicleToUpdate);
    }

    public void removeUser(Vehicle vehicle) {
        vehicle.setUser(null);
        vehicleRepository.save(vehicle);
    }
}
