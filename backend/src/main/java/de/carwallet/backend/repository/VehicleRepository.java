package de.carwallet.backend.repository;

import de.carwallet.backend.domain.model.User;
import de.carwallet.backend.domain.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    List<Vehicle> findByUserOrderByIdAsc(User user);

}
