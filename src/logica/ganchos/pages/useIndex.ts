import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import { FrontEndLocalInterface } from "@/logica/interfaces/FrontEndInterfaces";

export default function useIndex() {
    const formularioMetodosIndex = useForm<FrontEndLocalInterface>({
        resolver: yupResolver(ServicoEstruturaFormulario.buscaLocal()),
    });

    function consultar(dados: FrontEndLocalInterface) {
        console.log(dados);
        // ainda será desenvolvido
    }

    return {
        formularioMetodosIndex,
        consultar,
    };
}
