import { useContext, useEffect, useReducer } from "react";
import { produce } from "immer";
import { ServicoLogin } from "../servicos/ServicoLogin";
import {
    LinksInterface,
    LocalUsuarioInterface,
    ObjetoInterface,
    UsuarioInterface,
} from "../interfaces/interfaces";
import { ContextoDosObjetos } from "../contextos/ContextoDosObjetos";
import { LocalStorage } from "../servicos/ServicoArmazenamento";
import { ServicoApi } from "../servicos/ServicoApi";

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

type TipoDoEstadoInicial = typeof estadoInicial;

type AcaoDoLocalUsuario = "ATUALIZAR_DADOS" | "LOGANDO";

type TipoDaAcaoDoLocalUsuario = {
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

    // useEffect(() => {
    //     atualizarObjetos();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [estadoDosObjetos.objetos]);

    async function pegarLocalUsuarioLogado() {
        console.log("entrei na função 'pegarLocalUsuarioLogado'");
        try {
            despacho({ tipo: "LOGANDO", carregarObjeto: true });
            const localUsuario = await ServicoLogin.informacoesLocalUsuario();
            if (localUsuario) {
                despacho({ tipo: "ATUALIZAR_DADOS", carregarObjeto: localUsuario });
            } else {
                despacho({ tipo: "LOGANDO", carregarObjeto: false });
            }
            console.log(estado.local.usuario);
        } catch (erro) {}
    }

    // async function atualizarObjetos() {
    //     const chave = LocalStorage.pegar("token", "");
    //     try {
    //         const objetos = (
    //             await ServicoApi.get<ObjetoInterface[]>("api/objetos", {
    //                 headers: { Authorization: `Bearer ${chave}` },
    //             })
    //         ).data;
    //         despachoDosObjetos({ tipo: "ATUALIZAR_OBJETOS", carregarObjeto: objetos });
    //         console.log(estadoDosObjetos);
    //     } catch (erro) {
    //         despachoDosObjetos({ tipo: "BUSCANDO_OBJETOS", carregarObjeto: true });
    //     }
    // }

    return {
        estadoDoLocalUsuario: estado,
        despachoDoLocalUsuario: despacho,
    };
}
