import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ServicoAPI } from "@/logica/servicos/ServicoApi";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import { FrontEndLocalUsuarioInterface } from "@/logica/interfaces/FrontEndInterfaces";
import { LocalUsuarioInterface } from "@/logica/interfaces/interfaces";

export default function useCadastro() {
    const formularioMetodosCadastro = useForm<FrontEndLocalUsuarioInterface>({
            resolver: yupResolver(ServicoEstruturaFormulario.cadastro()),
        }),
        [mensagem, alterarMensagem] = useState(false);

    async function cadastrar(dados: FrontEndLocalUsuarioInterface): Promise<void> {
        try {
            await ServicoAPI.post<BackEndLocalUsuarioInterface>("/api/locais", dados);
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
