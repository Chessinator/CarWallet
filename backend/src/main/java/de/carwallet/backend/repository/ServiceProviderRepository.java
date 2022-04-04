package de.carwallet.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import de.carwallet.backend.domain.model.ServiceProvider;

public interface ServiceProviderRepository extends JpaRepository<ServiceProvider, Long> {
}
