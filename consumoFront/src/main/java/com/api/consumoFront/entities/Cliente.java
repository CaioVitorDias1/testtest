package com.api.consumoFront.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String nome;
    @Column
    private String cpf;
    @OneToOne(orphanRemoval = true, cascade = CascadeType.ALL)
    private Endereco endereco;
    @OneToOne(orphanRemoval = true, cascade = CascadeType.ALL)
    private Servico servicoAtual;



}
