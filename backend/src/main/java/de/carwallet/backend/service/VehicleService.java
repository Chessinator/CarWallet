package de.carwallet.backend.service;


import de.carwallet.backend.domain.dto.VehicleCreateRequest;
import de.carwallet.backend.domain.dto.VehicleUpdateRequest;
import de.carwallet.backend.domain.model.User;
import de.carwallet.backend.domain.model.Vehicle;
import de.carwallet.backend.repository.VehicleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.stereotype.Service;
import javax.persistence.EntityNotFoundException;
import java.beans.FeatureDescriptor;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class VehicleService {

    private final VehicleRepository vehicleRepository;

    //CRUD
    public Vehicle addVehicle(Vehicle vehicle) {
         return vehicleRepository.save(vehicle);
    }

    public Vehicle getVehicle(Long id) {
        return vehicleRepository.findById(id).orElse(null);
    }

    public List<Vehicle> getVehicles(User user) {
        List<Vehicle> vehicleList = vehicleRepository.findByUserOrderByIdAsc(user);
        return vehicleList.isEmpty() ? null : vehicleList;
    }

    public Vehicle updateVehicle(Long id, Vehicle vehicle) {
        Optional<Vehicle> optionalVehicle = vehicleRepository.findById(id);
        if (optionalVehicle.isPresent()) {
            return vehicleRepository.save(vehicle);
        }
        return null;
    }

    public void deleteVehicle(Long id) {
        Vehicle vehicleToDelete = vehicleRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        vehicleRepository.delete(vehicleToDelete);
    }
}
