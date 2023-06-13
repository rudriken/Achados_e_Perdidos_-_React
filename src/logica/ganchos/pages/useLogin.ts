import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ServicoLogin } from "@/logica/servicos/ServicoLogin";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import { LoginInterface } from "@/logica/interfaces/interfaces";

export default function useLogin() {
    const formularioMetodosLogin = useForm<LoginInterface>({
            resolver: yupResolver(ServicoEstruturaFormulario.login()),
        }),
        [erro, alterarErro] = useState(false);

    async function logar(credenciais: LoginInterface): Promise<void> {
        const sucesso = await ServicoLogin.entrar(credenciais);
        if (sucesso) {
            window.location.reload();
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
