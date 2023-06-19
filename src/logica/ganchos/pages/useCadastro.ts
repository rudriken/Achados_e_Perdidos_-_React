import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useLogin from "./useLogin";
import { ServicoApi } from "@/logica/servicos/ServicoApi";
import { ServicoLogin } from "@/logica/servicos/ServicoLogin";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import { LocalStorage } from "@/logica/servicos/ServicoArmazenamento";
import { ContextoDoLocalUsuario } from "@/logica/contextos/ContextoDoLocalUsuario";
import { LocalUsuarioInterface, LoginInterface } from "@/logica/interfaces/interfaces";

export default function useCadastro() {
    const formularioMetodosCadastro = useForm<LocalUsuarioInterface>({
        resolver: yupResolver(ServicoEstruturaFormulario.cadastro()),
    });
    const formularioMetodosAlteracaoDados = useForm<LocalUsuarioInterface>({
        resolver: yupResolver(ServicoEstruturaFormulario.alteracaoDados()),
    });
    const [sucesso, alterarSucesso] = useState(false);
    const [erro, alterarErro] = useState(false);
    const [campoLocalAlterado, alterarCampoLocalAlterado] = useState(false);
    const [campoUsuarioAlterado, alterarCampoUsuarioAlterado] = useState(false);
    const [esperar, alterarEsperar] = useState(false);
    const { despachoDoLocalUsuario } = useContext(ContextoDoLocalUsuario);
    const [temErroDeCampoLocal, alterarTemErroDeCampoLocal] = useState(false);
    const [temErroDeCampoUsuario, alterarTemErroDeCampoUsuario] = useState(false);
    const { deslogar } = useLogin();

    async function cadastrar(
        dados: LocalUsuarioInterface,
        imagemFileLocal: File
    ): Promise<void> {
        try {
            alterarEsperar(true);
            await ServicoApi.post<LocalUsuarioInterface>("/api/locais", dados, {
                headers: { Authorization: "Bearer " + LocalStorage.pegar("token", "") },
            });
            await logar({
                email: dados.usuario.email,
                password: dados.usuario.password as string,
            });
            await ServicoApi.post(
                "api/locais/imagem",
                { imagem_local: imagemFileLocal },
                {
                    headers: {
                        Authorization: "Bearer " + LocalStorage.pegar("token", ""),
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            alterarEsperar(false);
            alterarSucesso(true);
        } catch (erro) {
            alterarEsperar(false);
            alterarErro(true);
        }
    }

    async function logar(credenciais: LoginInterface): Promise<void> {
        try {
            await ServicoLogin.entrar(credenciais);
        } catch (erro) {}
    }

    async function atualizarContextoDoLocalUsuario() {
        const localUsuario = await ServicoLogin.informacoesDoLocalUsuario();
        if (localUsuario) {
            despachoDoLocalUsuario({ tipo: "ATUALIZAR_DADOS", carga: localUsuario });
        }
    }

    async function atualizar(
        dados: LocalUsuarioInterface,
        imagemFileLocal: File
    ): Promise<void> {
        try {
            alterarEsperar(true);
            await ServicoApi.put<LocalUsuarioInterface>("/api/locais", dados, {
                headers: { Authorization: "Bearer " + LocalStorage.pegar("token", "") },
            });
            if (imagemFileLocal.name) {
                await ServicoApi.post(
                    "api/locais/imagem",
                    { imagem_local: imagemFileLocal },
                    {
                        headers: {
                            Authorization: "Bearer " + LocalStorage.pegar("token", ""),
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
            }
            alterarEsperar(false);
            alterarSucesso(true);
        } catch (erro) {
            alterarEsperar(false);
            alterarErro(true);
        }
    }

    async function excluirLocal() {
        await ServicoApi.delete("/api/locais", {
            headers: { Authorization: "Bearer " + LocalStorage.pegar("token", "") },
        });
        deslogar();
    }

    return {
        formularioMetodosCadastro,
        formularioMetodosAlteracaoDados,
        cadastrar,
        atualizar,
        alterarSucesso,
        sucesso,
        erro,
        atualizarContextoDoLocalUsuario,
        campoLocalAlterado,
        alterarCampoLocalAlterado,
        campoUsuarioAlterado,
        alterarCampoUsuarioAlterado,
        esperar,
        alterarEsperar,
        excluirLocal,
        temErroDeCampoLocal,
        alterarTemErroDeCampoLocal,
        temErroDeCampoUsuario,
        alterarTemErroDeCampoUsuario,
    };
}
