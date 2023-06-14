import { useContext, useState } from "react";
import { FormProvider } from "react-hook-form";
import { Container, Typography } from "@mui/material";
import { GetStaticProps } from "next";
import useCadastro from "@/logica/ganchos/pages/useCadastro";
import {
    FormularioLocal,
    FormularioUsuario,
} from "@/visual/componentes/entradas/Formularios/Formularios";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import Dialogo from "@/visual/componentes/retorno/Dialogo/Dialogo";
import { conjuntoDeCampo } from "@/logica/tipos/globais";
import { ContextoDoLocalUsuario } from "@/logica/contextos/ContextoDoLocalUsuario";

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            titulo: "Cadastro",
        },
    };
};

export default function Cadastro() {
    const { formularioMetodosCadastro, cadastrar, sucesso, erro, irParaParaAreaPrivada } =
            useCadastro(),
        { handleSubmit } = formularioMetodosCadastro;
    const [imagemFile, alterarImagemFile] = useState({} as File);

    return (
        <FormProvider {...formularioMetodosCadastro}>
            <Cabecalho imagem={"img/logos/logo.svg"} />
            <Container>
                <TituloPagina
                    titulo={"Cadastrar-se na plataforma"}
                    subtitulo={"Primeiro vamos precisar de alguns dados pessoais"}
                />

                <form
                    onSubmit={handleSubmit(() =>
                        cadastrar(formularioMetodosCadastro.getValues(), imagemFile)
                    )}
                    autoComplete={"on"}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <fieldset {...conjuntoDeCampo}>
                        <Typography sx={{ my: 2, color: "#abb6c3" }}>
                            Dados do local
                        </Typography>
                        <FormularioLocal
                            imagemFileLocal={(imagemFile) => {
                                alterarImagemFile(imagemFile);
                            }}
                        />
                    </fieldset>

                    <fieldset {...conjuntoDeCampo}>
                        <Typography sx={{ my: 2, color: "#abb6c3" }}>
                            Dados do administrador do local
                        </Typography>

                        <FormularioUsuario />
                    </fieldset>

                    {erro && (
                        <Typography
                            color={"red"}
                            style={{ padding: 0, margin: 0, transform: "translateY(-20px)" }}
                        >
                            Este e-mail já existe no nosso banco de dados!
                        </Typography>
                    )}

                    <Botao
                        texto={"Cadastre-se"}
                        modo={"contained"}
                        tipo={"submit"}
                        cor={"primary"}
                        largura={200}
                        fonteTamanho={16}
                        desabilitado={false}
                    />
                </form>
            </Container>

            {sucesso && (
                <Dialogo
                    aberto={sucesso}
                    titulo={"Sucesso!"}
                    subtitulo={"Cadastro do usuário e local realizado com sucesso!"}
                    temBotaoCancelar
                    rotuloCancelar={"Fechar"}
                    aoCancelar={irParaParaAreaPrivada}
                />
            )}
        </FormProvider>
    );
}
