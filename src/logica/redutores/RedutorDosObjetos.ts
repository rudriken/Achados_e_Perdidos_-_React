import { produce } from "immer";
import { ObjetoInterface } from "../interfaces/interfaces";
import { useEffect, useReducer } from "react";
import { ServicoLogin } from "../servicos/ServicoLogin";

export const estadoInicial = {
    objetos: [] as ObjetoInterface[],
    buscando: true,
};

type TipoDoEstadoInicial = typeof estadoInicial;

type AcaoDosObjetos = "ATUALIZAR_OBJETOS" | "BUSCANDO_OBJETOS";

type TipoDaAcaoDosObjetos = {
    tipo: AcaoDosObjetos;
    carregarAcao?: unknown;
};

export interface RedutorDosObjetosInterface {
    estadoDosObjetos: TipoDoEstadoInicial;
    despachoDosObjetos: React.Dispatch<TipoDaAcaoDosObjetos>;
}

const redutor = (estadoAtual: TipoDoEstadoInicial, acao: TipoDaAcaoDosObjetos) => {
    const proximoEstado = produce(estadoAtual, (estadoRascunho) => {
        switch (acao.tipo) {
            case "ATUALIZAR_OBJETOS":
                estadoRascunho.objetos = acao.carregarAcao as ObjetoInterface[];
                estadoRascunho.buscando = false;
                break;
            case "BUSCANDO_OBJETOS":
                estadoRascunho.buscando = acao.carregarAcao as boolean;
                break;
        }
    });
    return proximoEstado;
};

export function useRedutorDosObjetos(): RedutorDosObjetosInterface {
    const [estado, despacho] = useReducer(redutor, estadoInicial);

    useEffect(() => {
        pegarObjetos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [estado.objetos]);

    async function pegarObjetos(): Promise<void> {
        const objetos = await ServicoLogin.informacoesDosObjetos();

        if (Array.isArray(objetos) && objetos.length > 0) {
            let diferente = false;

            for (let indice = 0; indice < objetos.length; indice++) {
                if (objetos.length === estado.objetos.length) {
                    if (
                        JSON.stringify(objetos[indice]) !==
                        JSON.stringify(estado.objetos[indice])
                    ) {
                        diferente = true;
                        break;
                    }
                }
                if (objetos.length !== estado.objetos.length) {
                    diferente = true;
                    break;
                }
                diferente = false;
            }

            if (diferente) {
                despachar();
            }
        } else if (objetos === "objetos_vazio") {
            despacho({ tipo: "BUSCANDO_OBJETOS", carregarAcao: false });
        } else {
            despacho({ tipo: "BUSCANDO_OBJETOS", carregarAcao: true });
        }

        function despachar() {
            despacho({ tipo: "ATUALIZAR_OBJETOS", carregarAcao: objetos });
        }
    }

    return {
        estadoDosObjetos: estado,
        despachoDosObjetos: despacho,
    };
}
