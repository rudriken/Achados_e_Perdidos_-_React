import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ServicoLogin } from "@/logica/servicos/ServicoLogin";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import { LoginRespostaInterface } from "@/logica/interfaces/interfaces";

export default function useLogin() {
    const formularioMetodosLogin = useForm<LoginRespostaInterface>({
            resolver: yupResolver(ServicoEstruturaFormulario.login()),
        }),
        [erro, alterarErro] = useState(false);

    async function logar(credenciais: LoginInterface): Promise<void> {
        const sucesso = await ServicoLogin.entrar(credenciais);
        if (sucesso) {
            alterarErro(false);
        } else {
            alterarErro(true);
        }
    }

    return {
        formularioMetodosLogin,
        logar,
        erro,
    };
}
