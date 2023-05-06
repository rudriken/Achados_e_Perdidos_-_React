import type { Meta, StoryObj } from "@storybook/react";
import CampoDeTexto from "./CampoDeTexto";

const meta: Meta<typeof CampoDeTexto> = {
    title: "entradas/CampoDeTexto",
    component: CampoDeTexto,
};

export default meta;

type Historia = StoryObj<typeof CampoDeTexto>;

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
