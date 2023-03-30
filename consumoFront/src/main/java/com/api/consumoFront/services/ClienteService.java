package com.api.consumoFront.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.api.consumoFront.entities.Cliente;
import com.api.consumoFront.entities.Parcela;
import com.api.consumoFront.repositories.ClienteRepository;

import jakarta.websocket.server.PathParam;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;


    public List<Cliente> pegarTodosClientes(){
        List<Cliente> listaClientes = clienteRepository.findAll();
        return listaClientes;
    }

    public Cliente pegarUmCliente(@PathVariable Long id){
        List<Cliente> listaClientes = clienteRepository.findAll();
        Cliente clienteBuscado = null;
        for(Cliente cliente: listaClientes){
            if(cliente.getId() == id){
                clienteBuscado = cliente;
            }
        }
        return clienteBuscado;
    }

    public Cliente pegarUmClientePorNome(@RequestParam String nome){
        List<Cliente> listaClientes = clienteRepository.findAll();
        Cliente clienteBuscado = null;
        for(Cliente cliente: listaClientes){
            if(cliente.getNome() == nome){
                clienteBuscado = cliente;
            }
        }
        return clienteBuscado;
    }

    public Cliente cadastrarCliente(@RequestBody Cliente cliente){
        clienteRepository.save(cliente);
        return cliente;
    }

    public Cliente cadastrarClienteComParcelas(@RequestBody Cliente cliente){
        int precoDoServico = cliente.getServicoAtual().getPrecoServico();
        int precoCadaParcela = precoDoServico / 12;
        List<Parcela> listaParcelas = new ArrayList<>();

        for(int i = 0; i <12; i++){
            Parcela parcela = new Parcela();
            parcela.setValorParcela(precoCadaParcela);
            parcela.setNumeroParcela((i +1));
            listaParcelas.add(parcela);
            cliente.getServicoAtual().setParcelas(listaParcelas);
        }
        clienteRepository.save(cliente);
        return cliente;

    }
    
}
