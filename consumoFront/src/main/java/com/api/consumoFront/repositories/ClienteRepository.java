package com.api.consumoFront.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.consumoFront.entities.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{
    
}
