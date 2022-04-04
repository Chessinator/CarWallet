package de.carwallet.backend.repository;

import de.carwallet.backend.domain.model.ServiceProvider;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ServiceProviderRepository extends JpaRepository<ServiceProvider, Long> {
    Optional<ServiceProvider> findById(Long aLong);
}
