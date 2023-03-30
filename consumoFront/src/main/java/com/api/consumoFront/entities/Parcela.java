package com.api.consumoFront.entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Parcela {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = true)
    private long idCliente;
    @Column(nullable = true)
    private int numeroParcela;
    @Column(nullable = true)
    private Date dataVencimento;
    @Column(nullable = true)
    private Date dataPagamento;
    @Column(nullable = true)
    private Date dataCredito;
    @Column(nullable = true)
    private int valorParcela;
    @Column(nullable = true)
    private int valorPago;

}
