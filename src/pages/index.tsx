import { FormProvider } from "react-hook-form";
import { Container } from "@mui/material";
import useIndex from "@/logica/ganchos/pages/useIndex";
import { FormularioIndex } from "@/visual/componentes/entradas/Formularios/Formularios";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import { parciais } from "@/logica/tipos/globais";
import ListarLocais from "@/visual/parciais/_listar_locais";

export default function Inicial() {
    const { formularioMetodosIndex, consultar, parcial, locais } = useIndex(),
        { handleSubmit } = formularioMetodosIndex;

    return (
        <FormProvider {...formularioMetodosIndex}>
            <Cabecalho imagem={"img/logos/logo.svg"} botao={"Cadastrar um local"} />
            {/* <Container>
                <Grade
                    imagem={"/img/fotos/Martins Distribuidora.jpg"}
                    titulo={"Nome do local"}
                    linha1={"Rua Nome da Rua, 898"}
                    linha2={"Nome Bairro - Cidade - Estado"}
                    rotuloDoBotao={"Ver objetos"}
                    aoClicar={() => {}}
                />
            </Container> */}
            {parcial === "index" && (
                <Container
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
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

                        <Botao
                            texto={"Buscar"}
                            modo={"contained"}
                            tipo="submit"
                            margem={32}
                        />
                    </form>
                </Container>
            )}

            {parcial === parciais.publicas[0] && <ListarLocais locais={locais} />}
        </FormProvider>
    );
}
