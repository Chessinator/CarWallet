package de.carwallet.backend.repository;

import de.carwallet.backend.domain.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {
    Optional<Service> findByVehicleId(Long id);
    Optional<Service> findByProviderId(Long id);
}
