package de.carwallet.backend.repository;

import de.carwallet.backend.domain.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {
    List<Service> findByVehicleId(Long id);
    List<Service> findByServiceProviderId(Long id);
}