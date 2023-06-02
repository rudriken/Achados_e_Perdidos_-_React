import { Meta, StoryFn } from "@storybook/react";
import BotaoDoUsuario from "./BotaoDoUsuario";

const Componente = BotaoDoUsuario;

export default {
    title: "entradas/BotaoDoUsuario",
    component: Componente,
} as Meta<typeof Componente>;

const Modelo: StoryFn<typeof Componente> = (argumentos) => {
    return <Componente {...argumentos} />;
};

export const MeuBotaoDoUsuario = Modelo.bind({});
MeuBotaoDoUsuario.args = {
    nome: "Nair Mendonça",
    onClick: () => {},
};
