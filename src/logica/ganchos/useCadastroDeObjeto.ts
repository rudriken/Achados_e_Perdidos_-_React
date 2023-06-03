import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ServicoEstruturaFormulario } from "../servicos/ServicoEstruturaFormulario";
import { ObjetoInterface } from "../interfaces/interfaces";
import { ServicoApi } from "../servicos/ServicoApi";
import { useState } from "react";

export default function useCadastroDeObjeto() {
    const formularioMetodosCadastroObjeto = useForm<ObjetoInterface>({
        resolver: yupResolver(ServicoEstruturaFormulario.cadastroObjeto()),
    });
    const [mensagem, alterarMensagem] = useState(false);

    async function cadastrar(dados: ObjetoInterface) {
        try {
            await ServicoApi.post<ObjetoInterface>("api/objetos", dados);
            alterarMensagem(true);
        } catch (erro) {
            return;
        }
    }

    return { formularioMetodosCadastroObjeto, cadastrar, mensagem, alterarMensagem };
}
