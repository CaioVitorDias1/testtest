import axios from "axios"
import { useEffect, useRef, useState } from "react"
import "../styles/pages/gerenciarTitulos.css"

export default function GerenciarTitulos(){

    /*const [users, setUsers] = useState(null)

    const pegarClientes = async () => {
        try{
            const response = await axios.get("http://localhost:8080/clientes/todos")
            
            const data = response.data
            console.log(data)

            setUsers(data)

        } catch(error){
            console.log(error)
        }
    }


    interface Usuario{
        nome: "",
       cpf: "",
       endereco: {
            rua: "",
            bairro:"",
            cidade: ""       },
       servicoAtual: {
        precoServico: 0,
        parcelas: [{}]
       }
    } */

   /*useEffect(() => {
        pegarClientes();
    }, [])*/

    
    interface ClienteInfo{
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
    //const numeroParcela = useRef(null)
   /* const proximaDataVencimento = useRef(null)
    const valorPago = useRef(null)
    const [numeroParcela, setnumeroParcela] = useState(null)*/

    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.get("http://localhost:8080/clientes/select", { params: {nome: inputUser}})
        .then(response => {

            const cliente = response.data
            setUserInfo(cliente)
            console.log(response)
            console.log(cliente)
            /*const numeroParcela: React.InputHTMLAttributes<HTMLInputElement> = userInfo.servicoAtual.parcelas.at(2)
            const proximaDataVencimento = userInfo?.servicoAtual.parcelas.at(3)
            const valorPago = userInfo?.servicoAtual.parcelas.at(7)*/
        }).catch(error => {
            console.log(error)});
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
                <input value={userInfo?.servicoAtual?.parcelas[0].numeroParcela} readOnly>
                    
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
                <div>
                <label className="tituloCampo" >Data do pagamento</label>
                <input type="text">
                        
                </input>
                </div>
                <div>
                <label className="tituloCampo" >Data de crédito</label>
                <input type="text">
                        
                </input>
                </div>
                <div>
                <label className="tituloCampo" >Valor a receber</label>
                <input type="text">
                        
                        </input>
                </div>

                <div>
                    <button>
                        Registrar pagamento
                    </button>
                </div>
            </form>
        </>
    )
}

