import { ObjetoInterface } from "../interfaces/interfaces";

export const ServicoHateoas = {
    self: (objeto: ObjetoInterface): boolean => {
        return (
            objeto.links.filter((link) => {
                return link.rel === "self";
            }).length === 1
        );
    },
    atualizarObjeto: (objeto: ObjetoInterface): boolean => {
        return (
            objeto.links.filter((link) => {
                return link.rel === "atualizar_objeto";
            }).length === 1
        );
    },
    apagarObjeto: (objeto: ObjetoInterface): boolean => {
        return (
            objeto.links.filter((link) => {
                return link.rel === "apagar_objeto";
            }).length === 1
        );
    },
    definirDonoObjeto: (objeto: ObjetoInterface): boolean => {
        return (
            objeto.links.filter((link) => {
                return link.rel === "definir_dono_objeto";
            }).length === 1
        );
    },
};
