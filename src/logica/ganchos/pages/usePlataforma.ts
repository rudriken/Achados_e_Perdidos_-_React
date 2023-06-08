import { useContext, useState } from "react";
import { ServicoApi } from "@/logica/servicos/ServicoApi";
import { ContextoDoLocalUsuario } from "@/logica/contextos/ContextoDoLocalUsuario";
import { ContextoDosObjetos } from "@/logica/contextos/ContextoDosObjetos";
import { LocalStorage } from "@/logica/servicos/ServicoArmazenamento";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";

export default function usePlataforma() {
    const [parcial, alterarParcial] = useState("nenhuma");
    const { estadoDoLocalUsuario, despachoDoLocalUsuario } =
        useContext(ContextoDoLocalUsuario);
    const { estadoDosObjetos, despachoDosObjetos } = useContext(ContextoDosObjetos);

    async function pegarObjetos() {
        try {
            const objetos = (
                await ServicoApi.get<ObjetoInterface[]>("api/objetos", {
                    headers: { Authorization: "Bearer " + LocalStorage.pegar("token", "") },
                })
            ).data;
            despachoDosObjetos({ tipo: "ATUALIZAR_OBJETOS", carga: objetos });
        } catch (erro) {
            return false;
        }
    }

    return {
        parcial,
        alterarParcial,
        estadoDoLocalUsuario,
        despachoDoLocalUsuario,
        estadoDosObjetos,
        despachoDosObjetos,
        pegarObjetos,
    };
}
