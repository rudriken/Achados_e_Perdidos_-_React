import { ChangeEvent } from "react";

export const ServicoContagemCaracteres = {
    contar: (valor: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): number => {
        return valor.target.value.length;
    },
};
