import { Meta, StoryFn } from "@storybook/react";
import Cardapio from "./Cardapio";

const Componente = Cardapio;

export default {
    title: "navegacao/Cardapio",
    component: Componente,
} as Meta<typeof Componente>;

const Modelo: StoryFn<typeof Componente> = (argumentos) => {
    return <Componente {...argumentos} />;
};

export const MeuCardapio = Modelo.bind({});
MeuCardapio.args = {
    abrir: true,
    opcoes: ["Alterar Dados", "Sair", "Contato"],
};
