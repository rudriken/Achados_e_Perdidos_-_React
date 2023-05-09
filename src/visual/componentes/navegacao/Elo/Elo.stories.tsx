import { Meta, StoryFn } from "@storybook/react";
import Elo from "./Elo";

export default {
    title: "navegacao/Elo",
    component: Elo,
} as Meta<typeof Elo>;

const Modelo: StoryFn<typeof Elo> = (argumentos) => {
    return <Elo {...argumentos}></Elo>;
};

export const MeuElo = Modelo.bind({});
MeuElo.args = {
    rotulo: "Teste",
    url: "http://google.com.br",
};
