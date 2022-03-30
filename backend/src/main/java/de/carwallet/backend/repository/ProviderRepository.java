package de.carwallet.backend.repository;

import de.carwallet.backend.domain.model.Provider;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProviderRepository extends JpaRepository<Provider, Long> {
}
