import tema from "@/visual/temas/tema";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={tema}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
