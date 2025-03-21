import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../paginas/Login";
import Pagina404 from "../paginas/Pagina404";
import Usuarios from "../paginas/Usuarios";
import UsuarioForm from "../paginas/Usuarios/UsuarioForm";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Login />}></Route>
                <Route path="/dashboard" element=""></Route>
                <Route path="/usuarios" element={<Usuarios/>}></Route>
                <Route path="/novo-usuario" element={<UsuarioForm/>}></Route>
                <Route path="/cadastro" element=""></Route>
                <Route path="/projetos" element=""></Route>
                <Route path="/tarefas" element=""></Route>
                <Route path="" element={<Pagina404 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;