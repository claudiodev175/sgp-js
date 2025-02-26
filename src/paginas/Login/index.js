import './login.css'
import logo from '../../arquivos/Imagens/sgp_logo_vertical.png'
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [manterConectado, setManterConectado] = useState(true);
    const [erro, setErro] = useState('');

    const fazerLogin = (e) => {
        e.preventDefault();

        if (email === '' || senha === '') {
            setErro("Preencha todos os campos!")
        }
        console.log({ email, senha, manterConectado})
    }
    return (
        <div className="bg-container">
            <div className='container'>
                <div className='row justify-content-center'>
                    <form className='col-md-5 col-10 login-container' onSubmit={fazerLogin}>
                        <div className='row justify-content-center my-4'>
                            <div className='col-8'>
                                <div className='d-flex justify-content-center'>
                                    <img src={logo} alt="Sistema de Gerenciamento de Projetos" width="200px" />
                                </div>

                                <div className='d-flex justify-content-center'>
                                    <span className='text-danger mb-2'>{erro}</span>
                                </div>

                                {erro}

                                <input
                                    type='text'
                                    className='form-control border border-primary mb-2'
                                    placeholder='E-mail'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    
                                />

                                <input
                                    type='password'
                                    className='form-control border border-primary mb-2'
                                    placeholder='Senha'
                                    value=''
                                    onChange={''}
                                    required
                                />

                                <div className='form-check text-start my-3'>
                                    <input
                                        className='form-check-input'
                                        type='checkbox'
                                        defaultChecked={true}
                                        onChange={''}
                                    />
                                    <label className='form-check-label text-dark'>
                                        Mantenha-me conectado
                                    </label>
                                </div>

                                <div className='d-flex justify-content-center'>
                                    <button type='submit' className='btn btn-primary mt-2 px-4'>Acessar</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login;