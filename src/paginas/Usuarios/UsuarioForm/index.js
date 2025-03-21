import { useState } from "react";
import Cabecalho from "../../../componentes/Cabecalho";
import Rodape from "../../../componentes/Rodape";
import {  useNavigate } from "react-router-dom";
import Modal from "../../../componentes/modal";


function UsuarioForm() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [status, setStatus] = useState("");
    const [exibirModal, setExibirModal] = useState(false);

    const enviarFormulario = (e) => {
        e.preventDefault();

        console.log({nome,cpf,email,senha,dataNascimento,status});

        setExibirModal(true);
    }

    const cancelar = () => {
        navigate("/usuarios");
    }

    const confirmarCadastro = () => {
        setExibirModal(false);
        navigate("/usuarios");
    }
    return (
        <>
            <Cabecalho />
            <section className="container mt-3" id="usuario-form">
                <div className="container">
                    <h1>Dados do Usuário</h1>
                    <form className="row g-3" onSubmit={enviarFormulario}>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input type="name" className="form-control" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="cpf" className="form-label">CPF</label>
                            <input type="text" className="form-control" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                            <input type="text" className="form-control" id="dataNascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="status" className="form-label">Status</label>
                            <select id="status" className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option disabled value="">Escolha...</option>
                                <option value={"INATIVO"}>Inativo</option>
                                <option value={"ATIVO"}>Ativo</option>
                            </select>
                        </div>
                        <div className="col-12">

                            <button className="btn btn-primary" type="submit" >
                                Salvar
                            </button>
                            <button className="btn btn-outline-primary ms-2" onClick={cancelar}>
                                Cancelar
                            </button>

                        </div>
                    </form>
                </div>

                {exibirModal && (
                    <Modal
                        titulo={"Confirmacao"}
                        texto={"Usuario cadastrado com sucesso!"}
                        txtBtn01={"OK"}
                        onClickBtn01={confirmarCadastro}
                    
                    
                    />
                )}
            </section>

            <Rodape />
        </>
    )
}

export default UsuarioForm;