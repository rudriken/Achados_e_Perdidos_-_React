import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ServicoApi } from "@/logica/servicos/ServicoApi";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import { LocalUsuarioInterface } from "@/logica/interfaces/interfaces";

export default function useCadastro() {
    const formularioMetodosCadastro = useForm<LocalUsuarioInterface>({
            resolver: yupResolver(ServicoEstruturaFormulario.cadastro()),
        }),
        [mensagem, alterarMensagem] = useState(false);

    async function cadastrar(dados: LocalUsuarioInterface): Promise<void> {
        try {
            console.log(dados);
            await ServicoApi.post<LocalUsuarioInterface>("/api/locais", dados);
            alterarMensagem(true);
        } catch (erro) {
            return;
        }
    }

    return {
        formularioMetodosCadastro,
        cadastrar,
        mensagem,
        alterarMensagem,
    };
}
