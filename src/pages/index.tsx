import { Container } from "@mui/material";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import { CampoDeTexto } from "@/visual/componentes/entradas/CampoDeTexto/CampoDeTexto.style";
import Botao from "@/visual/componentes/entradas/Botao/Botao";

export default function Inicial() {
    return (
        <Container>
            <form method="GET" action="">
                <Cabecalho imagem={"img/logos/logo.svg"} botao={"Cadastrar um local"} />
                <TituloPagina
                    titulo={"Perdeu um Objeto?"}
                    subtitulo={
                        "Veja se o local onde perdeu seu objeto já está cadastrado na nossa plataforma"
                    }
                />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <CampoDeTexto
                        placeholder={"Digite o nome do local"}
                        name={"local"}
                        style={{ maxWidth: "600px", width: "100%" }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Botao texto={"Buscar"} modo={"contained"} tipo="submit" />
                </div>
            </form>
        </Container>
    );
}
