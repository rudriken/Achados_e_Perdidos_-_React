import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Botao from "./Botao";
import { Button } from "@mui/material";

const Componente = Botao;

export default {
    title: "entradas/Botao",
    component: Componente,
} as Meta<typeof Componente>;

const Modelo: StoryFn<typeof Componente> = (argumentos) => {
    return <Componente {...argumentos}>Cadastre-se</Componente>;
};

export const MeuBotao = Modelo.bind({});
MeuBotao.args = {};

export const MeuBotaoComCor = Modelo.bind({});
MeuBotaoComCor.args = { variant: "contained", color: "primary" };
