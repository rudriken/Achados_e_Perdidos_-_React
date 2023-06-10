import { ChangeEvent } from "react";

export const ServicoContagemCaracteres = {
    contar: (valor: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string): number => {
        if (typeof valor === "string") {
            return valor.length;
        }
        return valor.target.value.length;
    },
};
