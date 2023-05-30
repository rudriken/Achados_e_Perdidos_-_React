import { useEffect, useReducer } from "react";
import { produce } from "immer";
import { ServicoLogin } from "../servicos/ServicoLogin";
import {
    LinksInterface,
    LocalUsuarioInterface,
    UsuarioInterface,
} from "../interfaces/interfaces";

export const estadoInicial = {
    local: {
        id: 0,
        nome: "",
        endereco: "",
        contato: "",
        descricao: "",
        imagem: "",
        usuario: {
            id: 0,
            nome: "",
            email: "",
        } as UsuarioInterface,
        links: [] as LinksInterface[],
    } as LocalUsuarioInterface,
    logando: false,
};

export type TipoDoEstadoInicial = typeof estadoInicial;

type AcaoDoLocalUsuario = "ATUALIZAR_DADOS" | "LOGANDO";

export type TipoDaAcaoDoLocalUsuario = {
    tipo: AcaoDoLocalUsuario;
    carregarObjeto?: unknown;
};

export interface RedutorDoLocalUsuarioInterface {
    estadoDoLocalUsuario: TipoDoEstadoInicial;
    despachoDoLocalUsuario: React.Dispatch<TipoDaAcaoDoLocalUsuario>;
}

const redutor = (estadoAtual: TipoDoEstadoInicial, acao: TipoDaAcaoDoLocalUsuario) => {
    const proximoEstado = produce(estadoAtual, (estadoRascunho) => {
        switch (acao.tipo) {
            case "ATUALIZAR_DADOS":
                estadoRascunho.local = acao.carregarObjeto as LocalUsuarioInterface;
                estadoRascunho.logando = false;
                break;
            case "LOGANDO":
                estadoRascunho.logando = acao.carregarObjeto as boolean;
                break;
        }
    });
    return proximoEstado;
};

export function useRedutorDoLocalUsuario(): RedutorDoLocalUsuarioInterface {
    const [estado, despacho] = useReducer(redutor, estadoInicial);

    useEffect(() => {
        pegarLocalUsuarioLogado();
    }, [estado.local.usuario.id]);

    async function pegarLocalUsuarioLogado() {
        try {
            despacho({ tipo: "LOGANDO", carregarObjeto: true });
            const localUsuario = await ServicoLogin.informacoes();
            if (localUsuario) {
                despacho({ tipo: "ATUALIZAR_DADOS", carregarObjeto: localUsuario });
            } else {
                despacho({ tipo: "LOGANDO", carregarObjeto: false });
            }
        } catch (erro) {}
    }

    return {
        estadoDoLocalUsuario: estado,
        despachoDoLocalUsuario: despacho,
    };
}
