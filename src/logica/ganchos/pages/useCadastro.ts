import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ServicoApi } from "@/logica/servicos/ServicoApi";
import { ServicoLogin } from "@/logica/servicos/ServicoLogin";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import { LocalStorage } from "@/logica/servicos/ServicoArmazenamento";
import { LocalUsuarioInterface, LoginInterface } from "@/logica/interfaces/interfaces";
import { ContextoDoLocalUsuario } from "@/logica/contextos/ContextoDoLocalUsuario";

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
    const { despachoDoLocalUsuario } = useContext(ContextoDoLocalUsuario);

    async function cadastrar(
        dados: LocalUsuarioInterface,
        imagemFileLocal: File
    ): Promise<void> {
        try {
            await ServicoApi.post<LocalUsuarioInterface>("/api/locais", dados);
            await logar({
                email: dados.usuario.email,
                password: dados.usuario.password as string,
            });
            const chave = LocalStorage.pegar("token", "");
            await ServicoApi.post(
                "api/locais/imagem",
                { imagem_local: imagemFileLocal },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: "Bearer " + chave,
                    },
                }
            );
            alterarSucesso(true);
        } catch (erro) {
            alterarErro(true);
        }
    }

    async function logar(credenciais: LoginInterface): Promise<void> {
        try {
            await ServicoLogin.entrar(credenciais);
        } catch (erro) {}
    }

    async function irParaParaAreaPrivada() {
        const localUsuario = await ServicoLogin.informacoesDoLocalUsuario();
        if (localUsuario) {
            despachoDoLocalUsuario({ tipo: "ATUALIZAR_DADOS", carga: localUsuario });
        }
    }

    async function atualizar(
        dados: LocalUsuarioInterface,
        imagemFileLocal: File
    ): Promise<void> {
        console.log(dados);
        // try {
        //     const resposta = (
        //         await ServicoApi.put<LocalUsuarioInterface>("/api/locais", dados)
        //     ).data;
        //     if (imagemFileLocal) {
        //         await ServicoApi.post("api/locais/imagem", { imagem_local: imagemFileLocal });
        //     }
        //     console.log(resposta);
        //     alterarSucesso(true);
        // } catch (erro) {
        //     alterarErro(true);
        // }
    }

    return {
        formularioMetodosCadastro,
        formularioMetodosAlteracaoDados,
        cadastrar,
        atualizar,
        alterarSucesso,
        sucesso,
        erro,
        irParaParaAreaPrivada,
        campoLocalAlterado,
        alterarCampoLocalAlterado,
        campoUsuarioAlterado,
        alterarCampoUsuarioAlterado,
    };
}
