import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../logica/servicos/EmotionCache";

export default class QualquerNome extends Document {
    static async getInitialProps(contexto: DocumentContext) {
        const renderizacaoPaginaOriginal = contexto.renderPage;
        const cache = createEmotionCache();
        const { extractCriticalToChunks } = createEmotionServer(cache);
        contexto.renderPage = () =>
            renderizacaoPaginaOriginal({
                enhanceApp: (Aplicacao: any) =>
                    function EnhanceApp(propriedades) {
                        return <Aplicacao emotionCache={cache} {...propriedades} />;
                    },
            });
        const propriedadesIniciais = await Document.getInitialProps(contexto);
        const emotionStyles = extractCriticalToChunks(propriedadesIniciais.html);
        const emotionStyleTags = emotionStyles.styles.map((estilo) => (
            <style
                data-emotion={`${estilo.key} ${estilo.ids.join(" ")}`}
                key={estilo.key}
                dangerouslySetInnerHTML={{ __html: estilo.css }}
            />
        ));

        return {
            ...propriedadesIniciais,
            emotionStyleTags,
        };
    }

    render(): JSX.Element {
        return (
            <Html lang="pt-BR">
                <Head>{(this.props as any).emotionStyleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
