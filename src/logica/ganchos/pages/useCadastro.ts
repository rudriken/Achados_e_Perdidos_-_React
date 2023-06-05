import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ServicoApi } from "@/logica/servicos/ServicoApi";
import { ServicoLogin } from "@/logica/servicos/ServicoLogin";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import { LocalStorage } from "@/logica/servicos/ServicoArmazenamento";
import { LocalUsuarioInterface, LoginInterface } from "@/logica/interfaces/interfaces";

export default function useCadastro() {
    const formularioMetodosCadastro = useForm<LocalUsuarioInterface>({
            resolver: yupResolver(ServicoEstruturaFormulario.cadastro()),
        }),
        [mensagem, alterarMensagem] = useState(false);

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
            alterarMensagem(true);
        } catch (erro) {
            return;
        }
    }

    async function logar(credenciais: LoginInterface): Promise<void> {
        try {
            await ServicoLogin.entrar(credenciais);
        } catch (erro) {}
    }

    return {
        formularioMetodosCadastro,
        cadastrar,
        mensagem,
        alterarMensagem,
    };
}
