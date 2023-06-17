import { FormProvider } from "react-hook-form";
import { Container, Typography } from "@mui/material";
import { GetStaticProps } from "next";
import useIndex from "@/logica/ganchos/pages/useIndex";
import ListarLocais from "@/visual/parciais/publicas/_listar_locais";
import ListarObjetos from "@/visual/parciais/publicas/_listar_objetos";
import { FormularioIndex } from "@/visual/componentes/entradas/Formularios/Formularios";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import { parciais } from "@/logica/tipos/globais";

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            titulo: "",
        },
    };
};

export default function Inicial() {
    const {
            formularioMetodosIndex,
            consultar,
            parcial,
            alterarParcial,
            locais,
            local,
            pegarObjetos,
            objetos,
            nomeBuscado,
            mensagem,
            alterarMensagem,
        } = useIndex(),
        { handleSubmit } = formularioMetodosIndex;

    return (
        <FormProvider {...formularioMetodosIndex}>
            <Cabecalho
                imagem={"img/logos/logo.svg"}
                botao={"Cadastrar um local"}
                botaoIrPara={"/cadastro"}
            />
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

                        <FormularioIndex
                            verificarMudancaDeBusca={(novaBusca) => {
                                if (novaBusca !== nomeBuscado) {
                                    alterarMensagem(false);
                                }
                            }}
                        />

                        {mensagem && (
                            <Typography color={"red"} style={{ marginTop: 10 }}>
                                Não encontramos nenhum local cadastrado que tenha em seu nome{" "}
                                <strong>
                                    &apos;
                                    {nomeBuscado.length > 50
                                        ? nomeBuscado.substring(0, 50) + "..."
                                        : nomeBuscado}
                                    &apos;
                                </strong>
                                !
                            </Typography>
                        )}

                        <Botao
                            texto={"Buscar"}
                            modo={"contained"}
                            tipo={"submit"}
                            margemSuperior={32}
                        />
                    </form>
                </Container>
            )}

            {parcial === parciais.publicas[0] && (
                <ListarLocais
                    nome={nomeBuscado}
                    locais={locais}
                    irPara_listar_objetos={async (local) => {
                        await pegarObjetos(local);
                        alterarParcial(parciais.publicas[1]);
                    }}
                />
            )}

            {parcial === parciais.publicas[1] && (
                <ListarObjetos local={local} objetos={objetos} />
            )}
        </FormProvider>
    );
}
