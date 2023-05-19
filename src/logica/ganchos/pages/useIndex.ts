import { FrontLocalInterface } from "@/logica/interfaces/FrontInterfaces";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function useIndex() {
    const formularioMetodosIndex = useForm<FrontLocalInterface>({
        resolver: yupResolver(ServicoEstruturaFormulario.buscaLocal()),
    });

    function consultar(dados: FrontLocalInterface) {
        console.log(dados);
        // ainda será desenvolvido
    }

    return {
        formularioMetodosIndex,
        consultar,
    };
}
