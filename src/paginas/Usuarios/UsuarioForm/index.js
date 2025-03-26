import { useState } from "react";
import Cabecalho from "../../../componentes/Cabecalho/index";
import Rodape from "../../../componentes/Rodape";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../componentes/modal/index"
import { salvarUsuario } from "../../../servicos/usuarios";
import formatarData from "../../../utils/data"

function Usuarioform() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState();
    const [status, setStatus] = useState("");
    const [exibirModal, setExibirModal] = useState(false);
    
    useEffect(() => {
        if (id) {
            obterUsuarioPeloId(id, setNome, setCpf, setDataNascimento, setEmail, setSenha, setStatus)
        }
    }, [])

    const enviarFormulario = async (e) => {
        e.preventDefault();
        const dadosUsuario = {
            nome,
            cpf,
            email,
            senha,
            dataNascimento: formatarData(dataNascimento),
            status
        }
        console.log(dadosUsuario);
        await salvarUsuario(dadosUsuario, setExibirModal);
    }

    const confirmarCadastro = () => {
        setExibirModal(false);
        navigate("/usuarios");
    }

    const cancelar = () => {
        navigate("/usuarios");
    }

    return (
        <>
            <Cabecalho />
            <section className="container mt-3" id="usuario-form">
                <div className="container">
                    <h1>Dados Usuário</h1>
                    <form className="row g-3" onSubmit={enviarFormulario}>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="nome" placeholder="Nome..." value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="cpf" className="form-label">CPF</label>
                            <input type="text" className="form-control" id="cpf" placeholder="XXX.XXX.XXX-XX" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="email" placeholder="Fulano@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="senha" placeholder="XXXXXXX" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                            <input type="date" className="form-control" id="dataNascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="status" className="form-label">Status</label>
                            <select id="status" className="form-select" value={status} onChange={(e) => setStatus(e.target.value)} required>
                                <option disabled value="">Escolha...</option>
                                <option value={"ATIVO"}>Ativo</option>
                                <option value={"INATIVO"}>Inativo</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Salvar</button>
                            <button type="button" className="btn btn-outline-primary ms-2" onClick={cancelar}>Cancelar</button>
                        </div>
                    </form>
                    {exibirModal && <Modal
                        titulo={"Confirmação"}
                        texto={"Usuario cadastrado com sucesso"}
                        txtBtn01={"OK"}
                        onClickBtn01={() => setExibirModal(false)}
                    />}
                </div>
            </section>

            <Rodape />
        </>
    )
}

export default Usuarioform;