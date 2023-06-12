import { ProvedorDosObjetos } from "@/logica/contextos/ContextoDosObjetos";
import { ProvedorPrincipal } from "@/logica/contextos/ContextoPrincipal";
import tema from "@/visual/temas/tema";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={tema}>
            <ProvedorPrincipal>
                <Component {...pageProps} />
            </ProvedorPrincipal>
        </ThemeProvider>
    );
}
