package de.carwallet.backend.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.time.LocalDate;

@Data
@AllArgsConstructor
public class AppNewsRequest {
    private String title;
    private String message;
    private LocalDate date;
}