import { Meta, StoryFn } from "@storybook/react";
import Cabecalho from "./Cabecalho";

const Componente = Cabecalho;

export default {
    title: "superficies/Cabecalho",
    component: Componente,
} as Meta<typeof Componente>;

const Modelo: StoryFn<typeof Componente> = (argumentos) => {
    return <Componente {...argumentos} />;
};

export const MeuCabecalho = Modelo.bind({});
MeuCabecalho.args = {
    usuario: "Altair Nakamura",
    imagem: "img/logos/logo.svg",
    link: "Objetos",
    cardapio: ["Alterar Dados", "Contato", "Sair"],
};
