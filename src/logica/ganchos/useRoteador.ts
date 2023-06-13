import { NextRouter, useRouter } from "next/router";
import { UsuarioInterface } from "../interfaces/interfaces";
import { useEffect } from "react";

export const rotasPrivadas = ["/plataforma"];

export const rotasPublicas = ["/", "/login", "/cadastro"];

export default function useRoteador(usuario: UsuarioInterface, logando: boolean): NextRouter {
    const roteador = useRouter();
    const logado = usuario.nome.length > 0;

    useEffect(() => {
        tratarNavegacao(roteador.route);
        roteador.events.on("routeChangeStart", tratarNavegacao);
        return () => {
            roteador.events.off("routeChangeStart", tratarNavegacao);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roteador, logado, logando]);

    function tratarNavegacao(url: string) {
        if (!logando) {
            if (rotasPrivadas.includes(url) && !logado) {
                roteador.replace(rotasPublicas[1]);
                return;
            }
            if (rotasPublicas.includes(url) && logado) {
                roteador.replace(pegarHome());
                return;
            }
        }
    }

    function pegarHome() {
        if (!logado) {
            return rotasPublicas[0];
        }
        return rotasPrivadas[0];
    }

    return roteador;
}
