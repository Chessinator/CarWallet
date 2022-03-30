package de.carwallet.backend.service;

import de.carwallet.backend.domain.model.Vehicle;
import de.carwallet.backend.repository.VehicleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VehicleService {

    private final VehicleRepository vehicleRepository;

    public Vehicle create(Vehicle Vehicle){
        return vehicleRepository.save(Vehicle);
    }

    public List<Vehicle> getAll() {
        return vehicleRepository.findAll();
    }

    public Vehicle getById(Long id) {
        return vehicleRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cant find any vehicle under given ID"));
    }

    public Vehicle update(Long id, Vehicle vehicle){
        Vehicle vehicleToUpdate = getById(id);
        BeanUtils.copyProperties(vehicle, vehicleToUpdate);
        return vehicleRepository.save(vehicleToUpdate);
    }

    public void delete(Long id){
        vehicleRepository.deleteById(id);
    }
}
