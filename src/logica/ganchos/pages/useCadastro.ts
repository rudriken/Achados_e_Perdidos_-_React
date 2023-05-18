import { BackLocalUsuarioInterface } from "@/logica/interfaces/BackInterfaces";
import { FrontLocalUsuarioInterface } from "@/logica/interfaces/FrontInterfaces";
import { ServicoAPI } from "@/logica/servicos/ServicoApi";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function useCadastro() {
    const formularioMetodosCadastro = useForm<FrontLocalUsuarioInterface>({
            resolver: yupResolver(ServicoEstruturaFormulario.cadastro()),
        }),
        [mensagem, alterarMensagem] = useState(false);

    async function cadastrar(dados: FrontLocalUsuarioInterface): Promise<void> {
        try {
            await ServicoAPI.post<BackLocalUsuarioInterface>("/api/locais", dados);
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
