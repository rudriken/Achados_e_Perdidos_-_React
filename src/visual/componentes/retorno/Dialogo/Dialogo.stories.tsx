import { Meta, StoryFn } from "@storybook/react";
import Dialogo from "./Dialogo";
import Botao from "../../entradas/Botao/Botao";

const Componente = Dialogo;

export default {
    title: "retorno/Dialogo",
    component: Componente,
} as Meta<typeof Componente>;

const Modelo: StoryFn<typeof Componente> = (argumentos) => {
    return <Componente {...argumentos} />;
};

export const MeuDialogo = Modelo.bind({});
MeuDialogo.args = {
    aberto: true,
    titulo: "Cuidado",
    subtitulo: "Veja bem sdf asdf asdf asdf asdf as df asdf asdf asdf asfd",
    temBotaoConfirmar: true,
    rotuloConfirmar: "Confirmar",
    temBotaoFechar: true,
    rotuloFechar: "Cancelar",
};
