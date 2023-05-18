import { LocalUsuarioInterface } from "@/logica/interfaces/FrontInterfaces";
import { ServicoAPI } from "@/logica/servicos/ServicoApi";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function useCadastro() {
    const formularioMetodosCadastro = useForm<LocalUsuarioInterface>({
            resolver: yupResolver(ServicoEstruturaFormulario.cadastro()),
        }),
        [mensagem, alterarMensagem] = useState(false);

    async function cadastrar(dados: LocalUsuarioInterface): Promise<void> {
        try {
            await ServicoAPI.post<LocalUsuarioInterface>("/api/locais", dados);
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
