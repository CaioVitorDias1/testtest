package com.api.consumoFront.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.consumoFront.entities.Cliente;
import com.api.consumoFront.services.ClienteService;

@RestController
@RequestMapping("/clientes")
public class ClienteController {
    
    @Autowired
    private ClienteService clienteService;

    @CrossOrigin
    @GetMapping("/todos")
    public List<Cliente> pegarTodos(){
      List<Cliente> listaClientes = clienteService.pegarTodosClientes();
      return listaClientes;
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Cliente pegarCliente(@PathVariable long id){
      Cliente clienteRetornado = clienteService.pegarUmCliente(id);
      return clienteRetornado;
    }

    @CrossOrigin
    @GetMapping("/cliente/{nome}")
    public Cliente pegarClienteNome(@PathVariable String nome){
      Cliente clienteRetornado = clienteService.pegarUmClientePorNome(nome);
      return clienteRetornado;
    }

    @CrossOrigin
    @PostMapping("/cadastrar")
    public Cliente cadastrar(@RequestBody Cliente cliente){
        Cliente Mostrarcliente = clienteService.cadastrarCliente(cliente);
        return Mostrarcliente;
    }

    @CrossOrigin
    @PostMapping("/cadastrarComParcela")
    public Cliente cadastrarComParcela(@RequestBody Cliente cliente){
      clienteService.cadastrarClienteComParcelas(cliente);
      return cliente;
    }

    @CrossOrigin
    @PutMapping("/atualizarParcela")
    public Cliente atualizar(@RequestBody Cliente cliente){
      Cliente clienteAtualizado = clienteService.atualizandoParcela(cliente);
      return clienteAtualizado;
    }
}
