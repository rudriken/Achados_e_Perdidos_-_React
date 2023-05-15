import { Meta, StoryFn } from "@storybook/react";
import Formularios from "./Formularios";

const Componente = Formularios;

export default {
    title: "entradas/Formularios",
    component: Componente,
} as Meta<typeof Componente>;

const Modelo: StoryFn<typeof Componente> = (argumentos) => {
    return <Componente {...argumentos} />;
};

export const MeuFormulario = Modelo.bind({});
MeuFormulario.args = {};
