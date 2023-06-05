import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ServicoEstruturaFormulario } from "../../servicos/ServicoEstruturaFormulario";
import { ObjetoInterface } from "../../interfaces/interfaces";
import { ServicoApi } from "../../servicos/ServicoApi";
import { useState } from "react";

export default function useCadastroDeObjeto() {
    const formularioMetodosCadastroObjeto = useForm<ObjetoInterface>({
        resolver: yupResolver(ServicoEstruturaFormulario.cadastroObjeto()),
    });
    const [mensagem, alterarMensagem] = useState(false);

    async function cadastrar(dados: ObjetoInterface, imagemFileObjeto: File) {
        try {
            const objeto = (await ServicoApi.post<ObjetoInterface>("api/objetos", dados))
                .data;
            await ServicoApi.post(
                `api/objetos/${objeto.id}/imagem`,
                { imagem_objeto: imagemFileObjeto },
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            alterarMensagem(true);
        } catch (erro) {
            return;
        }
    }

    return { formularioMetodosCadastroObjeto, cadastrar, mensagem, alterarMensagem };
}
