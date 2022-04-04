package de.carwallet.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.carwallet.backend.domain.model.Service;

@RestController
@RequestMapping("/api/service")
public class ServiceController {


@PostMapping
public ResponseEntity<Service> createService(@RequestBody Service request){
    return null;
}

@GetMapping("/types")
public ResponseEntity<List<String>> getServiceTypes(){
    return null;
}




}
