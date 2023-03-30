//import * as ReactDom from "react-dom"
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import CadastroCliente from "./pages/cadastroCliente"
import GerenciarTitulos from "./pages/gerenciarTitulos"
import Test from "./pages/test"

const AppRoutes = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/cadastroCliente" element={<CadastroCliente/>}>

                </Route>

                <Route path="/gerenciarTitulos" element={<GerenciarTitulos/>}>

                </Route>

                <Route path="/" element={<Test/>}>

                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;