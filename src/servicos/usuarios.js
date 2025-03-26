import { api } from "./api";

export async function  salvarUsuario(dadosUsuario, setExibirModal){
        await api.post('/usuarios', dadosUsuario)
            .then((resposta) => {
                if(resposta.status === 201){
                    setExibirModal(true);
                }
            })
            .catch((error) => {
                alert("Erro ao cadastrar usuário.")
                console.error("Erro ao cadastro usuario: ",error);
            });
        }

export async function listarUsuarios(setUsuarios) {
    await api.get('/usuarios').then((resposta) => {
        if (resposta.status === 200) {
            setUsuarios(resposta.data.content)
        }
    })
    .catch((error) => {
        alert("Erro ao listar usuarios.");
        console.error("Erro ao listar usuarios.",error);
    });
}

export async function obterUsuarioPeloId(id,
    setNome,
    setCpf,
    setDataNascimento,
    setEmail,
    setSenha,
    setStatus) {
    
    await api.get(`/usuarios/${id}`)
        .then((resposta) => {
            if (resposta.status === 200) {
                setNome(resposta.data.nome);
                setCpf(resposta.data.cpf);
                setDataNascimento(resposta.data.dataNascimento);
                setEmail(resposta.data.email);
                setSenha(resposta.data.senha);
                setStatus(resposta.data.status);
            }
           
        })
        .catch((erro) => {
            alert("Erro ao obter usuário")
            console.error("Erro ao obter usuario: ", erro)
        });
}

