import axios from "axios"
import React, { useEffect, useState } from "react"
import "../styles/pages/cadastroCliente.css"

export default function CadastroCliente(){
    
    const urlPost = "http://localhost:8080/clientes/cadastrar"
    
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [telefone, setTelefone] = useState("")
    const [rua, setRua] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
 
    const userCadastrado = {
       nome: nome,
       cpf: cpf,
       endereco: {
            rua: rua,
            bairro:bairro,
            cidade: cidade
       },
       servicoAtual: {
        precoServico: 1000,
        parcelas: [{}]
       }
    }

    function cadastrarCliente(){
        axios.post(urlPost, userCadastrado).then((response) => {console.log(response)})
    }

    const cadastrarClientes = async () => {
        try{

            await axios.post(urlPost, userCadastrado)
            
            .then(response => {
                {console.log(response)}
            })
            
        } catch(error){
            console.log(error)
        }
    }

    /*let status = false
    const handleClick = (status: boolean) =>{
        return status = true
    }*/

    /*const apertoBotao = () =>{
        console.log("cadastro realizado!")
    }*/

    //const [count, setCount] = useState(1)

    /*useEffect(() => {
        cadastrarClientes()
    }, [count])*/

    

    /*const [form, setForm] = useState({
        nome: "",
        cpf: "",
        telefone: "",
        rua: "",
        bairro: "",
        cidade: ""
    })*/
    
    /*const handleEvent = (event: Event, nome: string) => {
        setForm({
            ...form,
            [nome]: event.target
        })
    }

    const handleFormChange = (e: React.ChangeEvent) =>{
        if(e.target.getAttribute('name')== 'campoNome'){
           setForm({nome: "", cpf: "", telefone: "", rua: "",bairro: (e)=> e.target.value, cidade:""})
        }
    }*/

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        axios.post(urlPost, userCadastrado).then((response) => {console.log(response)})
    }

    
    
    return (
        <>

        <div>
            <h1>
                Cadastro de clientes
            </h1>
        </div>
        <form className="formulario" onSubmit={handleSubmit}>
            <div>
                <label className="tituloCampo">
                    Nome:
                </label>
                <input type="text" name="campoNome" value={nome} onChange={(e) => setNome(e.target.value)}>
                
                </input>
            </div>
            <div>
                <label className="tituloCampo">
                    CPF:
                </label>
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)}>
                
                </input>
            </div>
            <div>
                <label className="tituloCampo">
                    Telefone:
                </label>
                <input type="number" value={telefone} onChange={(e) => setTelefone(e.target.value)}>
                
                </input>
            </div>

            <div>
                <label className="tituloCampo">
                    Rua:
                </label>
                <input type="text"  value={rua} onChange={(e) => setRua(e.target.value)}>
                
                </input>
            </div>
            <div>
                <label className="tituloCampo">
                    Bairro:
                </label>
                <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)}>
                
                </input>
            </div>
            <div>
                <label className="tituloCampo">
                    Cidade
                </label>
                <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)}>
                
                </input>
            </div>

            <div>

                <br></br>
                

                <button type="submit">
                    Cadastrar
                </button>
            </div>
        </form>
        </>
    )
}