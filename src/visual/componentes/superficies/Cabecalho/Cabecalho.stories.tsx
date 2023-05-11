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
    imagem: "img/logos/logo.svg",
    link: "Objetos",
    botao: "Cadastrar um Local",
};
