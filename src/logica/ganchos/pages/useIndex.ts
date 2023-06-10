import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import { LocalInterface } from "@/logica/interfaces/interfaces";
import { useState } from "react";
import { ServicoApi } from "@/logica/servicos/ServicoApi";
import { parciais } from "@/logica/tipos/globais";

export default function useIndex() {
    const formularioMetodosIndex = useForm<LocalInterface>({
        resolver: yupResolver(ServicoEstruturaFormulario.buscaLocal()),
    });
    const [parcial, alterarParcial] = useState("index");
    const [locais, alterarLocais] = useState([] as LocalInterface[]);

    async function consultar(dados: LocalInterface) {
        const locais = (
            await ServicoApi.get<LocalInterface[]>(`/api/locais/busca?nome=${dados.nome}`)
        ).data;
        alterarLocais(locais);
        alterarParcial(parciais.publicas[0]);
    }

    return {
        formularioMetodosIndex,
        consultar,
        parcial,
        locais,
    };
}
