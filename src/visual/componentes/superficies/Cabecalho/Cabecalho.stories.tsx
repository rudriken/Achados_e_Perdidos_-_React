import { Meta, StoryFn } from "@storybook/react";
import Cabecalho from "./Cabecalho";

const Componente = Cabecalho;

export default {
    title: "superficies/Cabecalho",
    component: Componente,
} as Meta<typeof Componente>;

const Modelo: StoryFn<typeof Componente> = (argumentos) => {
    return <Cabecalho {...argumentos} />;
};

export const Header = Modelo.bind({});
Header.args = {
    imagem: "img/logos/logo.svg",
    link: "Objetos",
    botao: "Cadastrar um Local",
};
