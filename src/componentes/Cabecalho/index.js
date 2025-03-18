import logo from "../../arquivos/imagens/sgp_logo_horizontal.png";
import Botao from "../Botao";

function Cabecalho() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu-lateral"
                    aria-controls="menu-lateral"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu-lateral">
                    <a className="navbar-brand" href=".">
                        <img src={logo} alt="Sistema de Gestao de Projetos" width="200px" />
                    </a>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Usuarios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tarefas</a>
                        </li>
                    </ul>

                    <Botao texto="Sair" aoClicar={() => {}} />
                </div>
            </div>
        </nav>
    );
}

export default Cabecalho;