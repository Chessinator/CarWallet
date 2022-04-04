package de.carwallet.backend.vehicle;


import de.carwallet.backend.domain.dto.VehicleCreateRequest;
import de.carwallet.backend.domain.dto.VehicleUpdateRequest;
import de.carwallet.backend.domain.model.User;
import de.carwallet.backend.domain.model.Vehicle;
import de.carwallet.backend.repository.VehicleRepository;
import de.carwallet.backend.service.VehicleService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatExceptionOfType;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class VehicleServiceTest {

    @Mock
    VehicleRepository vehicleRepository;
    private VehicleService vehicleService;

    @BeforeEach
    void setUp() {
        vehicleService = new VehicleService(vehicleRepository);
    }

    @Test
    void addVehicle_validVehicle_returnsVehicle() {
        // GIVEN | ARRANGE
        VehicleCreateRequest request = new VehicleCreateRequest();
        request.setMake("Volkswagen");
        request.setModel("ID.3");
        request.setYear(2020);
        Vehicle vehicle = new Vehicle("Volkswagen", "ID.3", 2020);
        // WHEN | ACT
        when(vehicleRepository.save(any(Vehicle.class))).thenReturn(vehicle);
        Vehicle returnedVehicle = vehicleService.addVehicle(request, new User());
        // THEN | ASSERT
        assertThat(returnedVehicle).isNotNull();
        assertThat(returnedVehicle.getMake()).isEqualTo("Volkswagen");
    }

    @Test
    void getVehicle_searchValidId_returnVehicle() {
        // GIVEN | ARRANGE
        Vehicle vehicle = new Vehicle(
                3L,
                "Volkswagen",
                "ID.3",
                2022,
                "f23fg2g23gg4",
                "245452343",
                //Collections.emptyList(),
                "My newly bought ID.3 is such an electrifying experience that I am still shocked for its existence",
                new User(1L, "example@test.com", "top-secret")
        );
        // WHEN | ACT
        when(vehicleRepository.findById(anyLong())).thenReturn(Optional.of(vehicle));
        Vehicle returnedVehicle = vehicleService.getVehicle(2L);
        // THEN | ASSERT
        assertThat(returnedVehicle).isNotNull();
        assertThat(returnedVehicle.getMake()).isEqualTo("Volkswagen");
    }

    @Test
    void getVehicles_searchUser_returnsList() {
        // GIVEN | ARRANGE
        User user = new User(42L, "example@test.com", "top-secret");
        Vehicle vehicle = new Vehicle(
                3L,
                "Volkswagen",
                "ID.3",
                2022,
                "f23fg2g23gg4",
                "245452343",
               // Collections.emptyList(),
                "My newly bought ID.3 is such an electrifying experience that I am still shocked for its existence",
                user
        );
        // WHEN | ACT
        when(vehicleRepository.findByUser(any(User.class))).thenReturn(List.of(vehicle));
        List<Vehicle> vehicleList = vehicleService.getVehicles(user);
        // THEN | ASSERT
        assertThat(vehicleList).isNotNull();
        assertThat(vehicleList.isEmpty()).isFalse();
    }

    @Test
    void updateVehicle_returnsVehicle() {
        // GIVEN | ARRANGE
        Vehicle vehicle = new Vehicle(
                3L,
                "Volkswagen",
                "ID.3",
                2022,
                "f23fg2g23gg4",
                "245452343",
               // Collections.emptyList(),
                "My newly bought ID.3 is such an electrifying experience that I am still shocked for its existence",
                new User(42L, "example@test.com", "top-secret")
        );
        VehicleUpdateRequest vehicleDto = new VehicleUpdateRequest();
        vehicleDto.setModel("ID.42");
        // WHEN | ACT
        when(vehicleRepository.findById(anyLong())).thenReturn(Optional.of(vehicle));
        vehicle.setModel("ID.4");
        when(vehicleRepository.save(any(Vehicle.class))).thenReturn(vehicle);
        Vehicle returnedVehicle = vehicleService.updateVehicle(3L, vehicleDto);
        // THEN | ASSERT
        assertThat(returnedVehicle).isNotNull();
        assertThat(returnedVehicle.getMake()).isNotEqualTo(vehicleDto.getMake());
        assertThat(returnedVehicle.getModel()).isEqualTo(vehicleDto.getModel());
    }

    @Test
    void deleteVehicle_byId() {
        // GIVEN | ARRANGE
        Vehicle vehicle = new Vehicle(
                3L,
                "Volkswagen",
                "ID.3",
                2022,
                "f23fg2g23gg4",
                "245452343",
               // Collections.emptyList(),
                "My newly bought ID.3 is such an electrifying experience that I am still shocked for its existence",
                new User(42L, "example@test.com", "top-secret")
        );
        // WHEN | ACT
        when(vehicleRepository.findById(anyLong())).thenReturn(Optional.of(vehicle));
        vehicleService.deleteVehicle(vehicle.getId());
        // THEN | ASSERT
        verify(vehicleRepository).delete(any(Vehicle.class));
    }

    @Test
    void deleteVehicle_byId_notExists() {
        // GIVEN | ARRANGE
        // WHEN | ACT
        when(vehicleRepository.findById(anyLong())).thenReturn(Optional.empty());
        // THEN | ASSERT
        assertThatExceptionOfType(EntityNotFoundException.class)
                .isThrownBy(()->vehicleService.deleteVehicle(42L));
    }
}

