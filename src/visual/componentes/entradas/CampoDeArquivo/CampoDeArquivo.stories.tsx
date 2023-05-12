import { Meta, StoryFn } from "@storybook/react";
import CampoDeArquivo from "./CampoDeArquivo";

const Componente = CampoDeArquivo;

export default {
    title: "entradas/CampoDeArquivo",
    component: Componente,
} as Meta<typeof Componente>;

const Modelo: StoryFn<typeof Componente> = (argumentos) => {
    return <Componente {...argumentos} />;
};

export const MeuCampoDeArquivo = Modelo.bind({});
MeuCampoDeArquivo.args = {
    onChange(arquivos) {
        console.log("teste feito", arquivos);
    },
};
