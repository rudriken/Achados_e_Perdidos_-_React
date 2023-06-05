import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ServicoApi } from "@/logica/servicos/ServicoApi";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import { LocalUsuarioInterface, LoginInterface } from "@/logica/interfaces/interfaces";
import { LocalStorage } from "@/logica/servicos/ServicoArmazenamento";
import { ServicoLogin } from "@/logica/servicos/ServicoLogin";

export default function useCadastro() {
    const formularioMetodosCadastro = useForm<LocalUsuarioInterface>({
            resolver: yupResolver(ServicoEstruturaFormulario.cadastro()),
        }),
        [mensagem, alterarMensagem] = useState(false);

    async function cadastrar(
        dados: LocalUsuarioInterface,
        imagemObjeto: File
    ): Promise<void> {
        try {
            dados = { ...dados, imagem: "" };
            await ServicoApi.post<LocalUsuarioInterface>("/api/locais", dados);
            const chave = await logar({
                email: dados.usuario.email,
                password: dados.usuario.password as string,
            });
            await ServicoApi.post(
                "api/locais/imagem",
                { imagem_local: imagemObjeto },
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

    async function logar(credenciais: LoginInterface): Promise<string> {
        const logado = await ServicoLogin.entrar(credenciais);
        if (logado) {
            const token = LocalStorage.pegar("token", "");
            console.log(token);
            if (token) {
                return token;
            }
        }
        return "";
    }

    return {
        formularioMetodosCadastro,
        cadastrar,
        mensagem,
        alterarMensagem,
    };
}
