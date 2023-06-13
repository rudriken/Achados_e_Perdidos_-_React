import { useContext } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { CircularProgress, Container, ThemeProvider } from "@mui/material";
import useRoteador, { rotasPrivadas } from "@/logica/ganchos/useRoteador";
import { ContextoDoLocalUsuario } from "@/logica/contextos/ContextoDoLocalUsuario";
import { ProvedorPrincipal } from "@/logica/contextos/ContextoPrincipal";
import tema from "@/visual/temas/tema";
import { AppConteiner } from "./_app.style";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";

export function App({ Component, pageProps }: AppProps) {
    const { estadoDoLocalUsuario } = useContext(ContextoDoLocalUsuario);
    const roteador = useRoteador(
        estadoDoLocalUsuario.local.usuario,
        estadoDoLocalUsuario.logando
    );

    function podemosExibir() {
        if (rotasPrivadas.includes(roteador.pathname)) {
            if (estadoDoLocalUsuario.logando) {
                return false;
            } else {
                return estadoDoLocalUsuario.local.usuario.nome.length > 0;
            }
        }
        return true;
    }

    return (
        <>
            <Head>
                <title>Achados e Perdidos - {pageProps.titulo}</title>
            </Head>
            <ThemeProvider theme={tema}>
                <AppConteiner>
                    <main>
                        {podemosExibir() ? (
                            <Component {...pageProps} />
                        ) : (
                            <>
                                <Cabecalho imagem={"img/logos/logo.svg"} />
                                <Container sx={{ textAlign: "center", my: 10 }}>
                                    <CircularProgress size={100} />
                                </Container>
                            </>
                        )}
                    </main>
                </AppConteiner>
            </ThemeProvider>
        </>
    );
}

export default function ConteinerAppProvedor(propriedades: AppProps) {
    return (
        <ProvedorPrincipal>
            <App {...propriedades} />
        </ProvedorPrincipal>
    );
}
