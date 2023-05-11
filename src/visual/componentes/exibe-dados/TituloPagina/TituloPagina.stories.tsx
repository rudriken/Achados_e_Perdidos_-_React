import { Meta, StoryFn } from "@storybook/react";
import TituloPagina from "./TituloPagina";

const Componente = TituloPagina;

export default {
    title: "exibe-dados/TituloPagina",
    component: Componente,
} as Meta<typeof Componente>;

const Modelo: StoryFn<typeof Componente> = (argumentos) => {
    return <Componente {...argumentos} />;
};

export const MeuTituloPagina = Modelo.bind({});
MeuTituloPagina.args = {
    titulo: "Cadastrar-se na plataforma",
    subtitulo: "Primeiro vamos precisar de alguns dados pessoais",
};

// alternativa mais recente
/* import type { Meta, StoryObj } from "@storybook/react";
import TituloPagina from "./TituloPagina";

const meta: Meta<typeof TituloPagina> = {
    title: "exibe-dados/TituloPagina",
    component: TituloPagina,
};

export default meta;

type Historia = StoryObj<typeof TituloPagina>;

export const MeuTituloPagina: Historia = {
    decorators: [],
    name: "Título da Página",
    parameters: {},
    args: {
        titulo: "Cadastrar-se na plataforma",
        subtitulo: "Primeiro vamos precisar de alguns dados pessoais",
    },
}; */
