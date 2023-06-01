import { produce } from "immer";
import { LocalUsuarioInterface, ObjetoInterface } from "../interfaces/interfaces";
import { useContext, useEffect, useReducer } from "react";
import { ContextoDoLocalUsuario } from "../contextos/ContextoDoLocalUsuario";
import { ServicoApi } from "../servicos/ServicoApi";
import { LocalStorage } from "../servicos/ServicoArmazenamento";
import { ServicoLogin } from "../servicos/ServicoLogin";

export const estadoInicial = {
    objetos: [] as ObjetoInterface[],
    buscando: true,
};

type TipoDoEstadoInicial = typeof estadoInicial;

type AcaoDosObjetos = "ATUALIZAR_OBJETOS" | "BUSCANDO_OBJETOS";

type TipoDaAcaoDosObjetos = {
    tipo: AcaoDosObjetos;
    carregarObjeto?: unknown;
};

export interface RedutorDosObjetos {
    estadoDosObjetos: TipoDoEstadoInicial;
    despachoDosObjetos: React.Dispatch<TipoDaAcaoDosObjetos>;
}

const redutor = (estadoAtual: TipoDoEstadoInicial, acao: TipoDaAcaoDosObjetos) => {
    const proximoEstado = produce(estadoAtual, (estadoRascunho) => {
        switch (acao.tipo) {
            case "ATUALIZAR_OBJETOS":
                estadoRascunho.objetos = acao.carregarObjeto as ObjetoInterface[];
                estadoRascunho.buscando = false;
                break;
            case "BUSCANDO_OBJETOS":
                estadoRascunho.buscando = acao.carregarObjeto as boolean;
                break;
        }
    });
    return proximoEstado;
};

export function useRedutorDosObjetos(): RedutorDosObjetos {
    const [estado, despacho] = useReducer(redutor, estadoInicial);
    pegarObjetos();

    useEffect(() => {
        console.log("executando o useEffect");
        pegarObjetos();
    }, [estado.objetos]);

    async function pegarObjetos() {
        console.log("entrei na função 'pegarObjetos'");
        const objetos = await ServicoLogin.informacoesObjetos();
        console.log(objetos);
        console.log(estado.objetos);

        if (objetos) {
            console.log("tem objetos");
            let diferente = false;

            for (let indice = 0; indice < objetos.length; indice++) {
                if (objetos.length === estado.objetos.length) {
                    if (
                        JSON.stringify(objetos[indice]) !==
                        JSON.stringify(estado.objetos[indice])
                    ) {
                        console.log("objeto diferente encontrado");
                        diferente = true;
                        break;
                    }
                }
                if (objetos.length !== estado.objetos.length) {
                    console.log("quantidade de itens diferentes");
                    diferente = true;
                    break;
                }
                diferente = false;
            }

            // objetos.map((objeto, indice) => {
            //     if (objetos.length === estado.objetos.length) {
            //         if (JSON.stringify(objeto) !== JSON.stringify(estado.objetos[indice])) {
            //             console.log("quantidades iguais mas um item diferente");
            //             diferente == true;
            //         }
            //     }
            //     if (objetos.length !== estado.objetos.length) {
            //         console.log("arrays com quantidades diferentes");
            //         diferente = true;
            //     }
            //     if (JSON.stringify(objetos[0]) !== JSON.stringify(estado.objetos[0])) {
            //         console.log("primeiro item já é dierente");
            //         diferente = true;
            //     }
            //     console.log("oi");
            // });

            console.log("diferente:", diferente);

            if (diferente) {
                despachar();
            }

            // objetos.map((objeto, indice) => {
            //     if (estado.objetos && objetos.length === estado.objetos.length) {
            //         if (JSON.stringify(objeto) !== JSON.stringify(estado.objetos[indice])) {
            //             diferente = true;
            //         }
            //     } else {
            //         despacho({ tipo: "ATUALIZAR_OBJETOS", carregarObjeto: objetos });
            //     }
            //     if (diferente) {
            //         despacho({ tipo: "ATUALIZAR_OBJETOS", carregarObjeto: objetos });
            //     }
            // });
        } else {
            despacho({ tipo: "BUSCANDO_OBJETOS", carregarObjeto: true });
            console.log("buscando objetos");
        }

        function despachar() {
            despacho({ tipo: "ATUALIZAR_OBJETOS", carregarObjeto: objetos });
            console.log("despachado");
        }
    }

    return {
        estadoDosObjetos: estado,
        despachoDosObjetos: despacho,
    };
}
