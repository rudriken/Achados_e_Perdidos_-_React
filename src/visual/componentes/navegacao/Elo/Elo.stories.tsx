import { Meta, StoryFn } from "@storybook/react";
import Elo from "./Elo";

const Componente = Elo;

export default {
    title: "navegacao/Elo",
    component: Componente,
} as Meta<typeof Componente>;

const Modelo: StoryFn<typeof Componente> = (argumentos) => {
    return <Componente {...argumentos} />;
};

export const MeuElo = Modelo.bind({});
MeuElo.args = {
    rotulo: "Teste",
    url: "http://google.com.br",
};
