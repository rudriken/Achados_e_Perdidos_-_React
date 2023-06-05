import { FormProvider } from "react-hook-form";
import { Container } from "@mui/material";
import useIndex from "@/logica/ganchos/pages/useIndex";
import { FormularioIndex } from "@/visual/componentes/entradas/Formularios/Formularios";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import Botao from "@/visual/componentes/entradas/Botao/Botao";

export default function Inicial() {
    const { formularioMetodosIndex, consultar } = useIndex(),
        { handleSubmit } = formularioMetodosIndex;

    return (
        <FormProvider {...formularioMetodosIndex}>
            <Cabecalho imagem={"img/logos/logo.svg"} botao={"Cadastrar um local"} />
            <Container
                style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
            >
                <form
                    onSubmit={handleSubmit(consultar)}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <TituloPagina
                        titulo={"Perdeu um objeto?"}
                        subtitulo={
                            "Veja se o local onde perdeu seu objeto já está cadastrado na nossa plataforma"
                        }
                    />

                    <FormularioIndex />

                    <Botao texto={"Buscar"} modo={"contained"} tipo="submit" margem={32} />
                </form>
            </Container>
        </FormProvider>
    );
}
