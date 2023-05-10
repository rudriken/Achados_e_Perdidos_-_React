import type { Meta, StoryObj } from "@storybook/react";
import CampoDeTexto from "./CampoDeTexto";

const Componente = CampoDeTexto;

const meta: Meta<typeof Componente> = {
    title: "entradas/CampoDeTexto",
    component: Componente,
};

export default meta;

type Historia = StoryObj<typeof Componente>;

export const MeuCampoDeTexto: Historia = {
    decorators: [],
    name: "Com Argumentos",
    parameters: {},
    args: {
        label: "Nome",
        placeholder: "Digite seu nome aqui",
        fullWidth: true,
    },
};
