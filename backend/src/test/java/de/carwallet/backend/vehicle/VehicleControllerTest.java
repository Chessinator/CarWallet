package de.carwallet.backend.vehicle;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.carwallet.backend.controller.VehicleController;
import de.carwallet.backend.domain.dto.VehicleCreateRequest;
import de.carwallet.backend.domain.model.User;
import de.carwallet.backend.domain.model.Vehicle;
import de.carwallet.backend.service.VehicleService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

@WebMvcTest(VehicleController.class)
public class VehicleControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    VehicleService vehicleService;

    @BeforeEach
    void setUp() {

    }

    // GET: /api/vehicle
    @Test
    void getVehicles_noParams_withAuthUserAndExistingVehicles_returnsList() throws Exception {
        // GIVEN | ARRANGE
        List<Vehicle> vehicles = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            vehicles.add(new Vehicle(
                            (long) i,
                            "Volkswagen",
                            "ID.3",
                            2022,
                            "f23fg2g23gg4",
                            "245452343",
                          //  Collections.emptyList(),
                            "My newly bought ID.3 is such an electrifying experience that I am still shocked for its existence",
                            new User(42L, "example@test.com", "top-secret"))
            );
        }
        // WHEN | ACT
        when(vehicleService.getVehicles(any(User.class))).thenReturn(vehicles);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/vehicle"))
                .andDo(MockMvcResultHandlers.print())
                // THEN | ASSERT
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$._embedded.vehicles",Matchers.hasSize(5)));
    }

    // GET: /api/vehicle
    @Test
    void getVehicles_noParams_withAuthUserAndNoneVehicles_returnsNoContent() throws Exception {
        // GIVEN | ARRANGE
        // WHEN | ACT
        when(vehicleService.getVehicles(any(User.class))).thenReturn(Collections.emptyList());
        mockMvc.perform(MockMvcRequestBuilders.get("/api/vehicle"))
                .andDo(MockMvcResultHandlers.print())
                // THEN | ASSERT
                .andExpect(MockMvcResultMatchers.status().isNoContent());
    }

    // GET: /api/vehicle/{id}
    @Test
    void getVehicle_withIdParam_withAuthUserAndExistingVehicles_returnVehicle() throws Exception {
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
        when(vehicleService.getVehicle(anyLong())).thenReturn(vehicle);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/vehicle/3"))
                .andDo(MockMvcResultHandlers.print())
                // THEN | ASSERT
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("id").value(3));

    }

    // POST: /api/vehicle/{id} returns created vehicle
    @Test
    void addValid_valid_returnVehicle() throws Exception {
        // GIVEN | ARRANGE
        VehicleCreateRequest vehicleDto = new VehicleCreateRequest();
        vehicleDto.setMake("Audi");
        vehicleDto.setModel("TT");
        vehicleDto.setYear(2000);

        Vehicle vehicle = new Vehicle(
                13L,
                "Audi",
                "TT",
                2000,
                "f23fg2g23gg4",
                "245452343",
                //Collections.emptyList(),
                "My newly bought ID.3 is such an electrifying experience that I am still shocked for its existence",
                new User(42L, "example@test.com", "top-secret")
        );
        // WHEN | ACT
        when(vehicleService.addVehicle(any(Vehicle.class))).thenReturn(vehicle);
        // THEN | ASSERT
        mockMvc.perform(MockMvcRequestBuilders
                        .post("/api/vehicle/13")
                        .contentType(MediaType.APPLICATION_JSON).
                        content(new ObjectMapper().writeValueAsString(vehicleDto)))
                .andDo(MockMvcResultHandlers.print())
        // THEN | ASSERT
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}
