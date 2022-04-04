package de.carwallet.backend.repository;

import de.carwallet.backend.domain.model.Service;
import de.carwallet.backend.domain.model.ServiceProvider;
import de.carwallet.backend.domain.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {
    Collection<Service> findByVehicle(Vehicle vehicle);
    Collection<Service> findByServiceProvider(ServiceProvider serviceProvider);
}