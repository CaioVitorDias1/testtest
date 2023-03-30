import axios from "axios"
import { error } from "console"
import { off } from "process"
import { useEffect, useRef, useState } from "react"
import "../styles/pages/gerenciarTitulos.css"

export default function GerenciarTitulos(){

    
    interface ClienteInfo{
        id: "",
        nome: "",
        cpf: ""
        endereco: {
            id: 0,
            cep: "",
            rua: "",
            bairro: "",
            cidade: "",
            numero: "",
            complemento: "",
            uf: ""
        },
        servicoAtual: {
            id: 0,
            precoServico: 0,
            parcelas: [
                {
                    id: null,
                    idCliente: null,
                    numeroParcela: 0,
                    dataVencimento: "",
                    dataPagamento: "",
                    dataCredito: "",
                    valorParcela: 0,
                    valorPago: 0
                }
            ]
        }

        }
    
    const [inputUser, setInputUser] = useState("")

    const [userInfo, setUserInfo] = useState<ClienteInfo | null>()
   
    const [proximaParcela, setProximaParcela] = useState<number>()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nome = inputUser;

        axios.get(`http://localhost:8080/clientes/cliente/${nome}`)
        .then(response => {

            const cliente = response.data
            setUserInfo(cliente)
            console.log(response)
            console.log(cliente)

           
        }).catch(error => {
            console.log(error)});

        

        userInfo?.servicoAtual.parcelas.forEach(function(objeto, index) {
        if(objeto.valorPago === 0){
            setProximaParcela(index)
        } else {
            setProximaParcela(0)
        }})
        }


        const [userUpdate, setUserUpdate] = useState<ClienteInfo | null>()
        const [dataCredito, setDataCredito] = useState("")
        const [valorPago, setValorPago] = useState("")
        const [dataPagamento, setDataPagamento] = useState("")

    
        
    const handleSubmitUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUserUpdate(userInfo)

        
        
    


    const userAtualizado= {
        id: userUpdate?.id,
        nome: userUpdate?.nome,
        cpf: userUpdate?.cpf,
        endereco: {
            id: userUpdate?.endereco.id,
            cep: userUpdate?.endereco.cep,
            rua: userUpdate?.endereco.rua,
            bairro:userUpdate?.endereco.bairro,
            cidade: userUpdate?.endereco.cidade,
            numero: userUpdate?.endereco.numero,
            complemento: userUpdate?.endereco.complemento,
            uf: userUpdate?.endereco.uf
       },
       servicoAtual: {
        id: userUpdate?.servicoAtual.id,
        precoServico: 1000,
        parcelas: [{
            
            id: userUpdate?.servicoAtual.parcelas[0].id,
            idCliente: userUpdate?.servicoAtual.parcelas[0].idCliente,
            numeroParcela: userUpdate?.servicoAtual.parcelas[0].numeroParcela,
            dataCredito: dataCredito,
            dataPagamento: dataPagamento,
            dataVencimento: userUpdate?.servicoAtual.parcelas[0].dataVencimento,
            valorParcela: userUpdate?.servicoAtual.parcelas[0].valorParcela,
            valorPago: valorPago
        }]
       }
    }
        
        axios.put("http://localhost:8080/clientes/atualizarParcela", userAtualizado)
        .then(response => {
            const clienteAtualizado = response.data
            console.log(clienteAtualizado)
        })
        .catch(error => {
            console.log(error)
        });
    }
   
    return(
        <>
            <div>
                <h1>
                    Gerenciando títulos
                </h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <button>Alterar usuário</button>
                    <input type="text" value={inputUser} onChange={(e) => setInputUser(e.target.value)}>

                    </input>
                    <button type="submit">Selecionar usuário</button>
                </div>
                <div>
                <label className="tituloCampo">Próxima parcela</label>
                <input value={userInfo?.servicoAtual?.parcelas[proximaParcela].numeroParcela} readOnly>
                    
                </input>
                    
                </div>
                <div>
                <label className="tituloCampo" >Data de vencimento da próxima parcela</label>
                <input type="text" value={userInfo?.servicoAtual?.parcelas[0].dataVencimento} readOnly>
                        
                </input>
                </div>
                <div>
                <label className="tituloCampo" >Valor da parcela</label>
                <input type="text" value={userInfo?.servicoAtual?.parcelas[0].valorParcela} readOnly>
            
                </input>
                </div>

                </form>

                <form onSubmit={handleSubmitUpdate}>
                <div>
                <label className="tituloCampo" >Data do pagamento</label>
                <input type="text" value={dataPagamento} onChange={(e) => setDataPagamento(e.target.value)}>
                        
                </input>
                </div>
                <div>
                <label className="tituloCampo" >Data de crédito</label>
                <input type="text" value={dataCredito} onChange={(e) => setDataCredito(e.target.value)}>
                        
                </input>
                </div>
                <div>
                <label className="tituloCampo" >Valor a receber</label>
                <input type="number" value={valorPago} onChange={(e) => setValorPago(e.target.value)}>
                        
                        </input>
                </div>

                <div>
                    <button type="submit">
                        Registrar pagamento
                    </button>
                </div>
                </form>
        </>
    )
}

