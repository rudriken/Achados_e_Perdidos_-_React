import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import { LocalInterface } from "@/logica/interfaces/interfaces";

export default function useIndex() {
    const formularioMetodosIndex = useForm<LocalInterface>({
        resolver: yupResolver(ServicoEstruturaFormulario.buscaLocal()),
    });

    function consultar(dados: LocalInterface) {
        console.log(dados);
        // ainda será desenvolvido
    }

    return {
        formularioMetodosIndex,
        consultar,
    };
}
