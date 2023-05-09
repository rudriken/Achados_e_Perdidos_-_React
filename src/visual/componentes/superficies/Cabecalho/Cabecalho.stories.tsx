import { Meta, StoryFn } from "@storybook/react";
import Cabecalho from "./Cabecalho";

export default {
    title: "superficies/Cabecalho",
    component: Cabecalho,
} as Meta<typeof Cabecalho>;

const Modelo: StoryFn<typeof Cabecalho> = (argumentos) => {
    return <Cabecalho {...argumentos} />;
};

export const Header = Modelo.bind({});
Header.args = {
    imagem: "img/logos/logo.svg",
};
