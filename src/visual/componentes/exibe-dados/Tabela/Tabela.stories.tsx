import { Meta, StoryFn } from "@storybook/react";
import Tabela, { T_Celula, T_Linha } from "./Tabela";
import Botao from "../../entradas/Botao/Botao";

const Componente = Tabela;

export default {
    title: "exibe-dados",
    component: Componente,
} as Meta<typeof Componente>;

const Modelo: StoryFn<typeof Componente> = (argumentos) => {
    return <Componente {...argumentos} />;
};

export type DadosTipo = {
    nome: string;
    descricao: string;
    acoes: JSX.Element;
};

export const MinhaTabela = Modelo.bind({});
MinhaTabela.args = {
    cabecalho: ["Nome", "Descrição", "Ações"],
    dados: [
        {
            nome: "tomate",
            descricao: "'longa vida', vermelho, quase podre",
            acoes: (
                <>
                    <Botao texto={"Editar"} altura={40} cor={"success"} />
                    <Botao texto={"Apagar"} altura={40} cor={"error"} />
                    <Botao
                        texto={"Informar Entrega"}
                        altura={40}
                        cor={"info"}
                        largura={170}
                    />
                </>
            ),
        },
        {
            nome: "banana",
            descricao: "'nanica', amarela, madura",
            acoes: (
                <>
                    <Botao texto={"Editar"} altura={40} cor={"success"} />
                    <Botao texto={"Apagar"} altura={40} cor={"error"} />
                    <Botao
                        texto={"Informar Entrega"}
                        altura={40}
                        cor={"info"}
                        largura={170}
                    />
                </>
            ),
        },
        {
            nome: "laranja",
            descricao: "'pêra', verde, amanhã madura",
            acoes: (
                <>
                    <Botao texto={"Editar"} altura={40} cor={"success"} />
                    <Botao texto={"Apagar"} altura={40} cor={"error"} />
                    <Botao
                        texto={"Informar Entrega"}
                        altura={40}
                        cor={"info"}
                        largura={170}
                    />
                </>
            ),
        },
    ],
    renderizarLinha: (_item, indice) => {
        const item = _item as DadosTipo;
        return (
            <T_Linha key={indice}>
                <T_Celula>{item.nome}</T_Celula>
                <T_Celula>{item.descricao}</T_Celula>
                <T_Celula>{item.acoes}</T_Celula>
            </T_Linha>
        );
    },
};
