import { FormProvider } from "react-hook-form";
import { Container, Typography } from "@mui/material";
import useCadastro from "@/logica/ganchos/pages/useCadastro";
import {
    FormularioLocal,
    FormularioUsuario,
} from "@/visual/componentes/entradas/Formularios/Formularios";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import Dialogo from "@/visual/componentes/retorno/Dialogo/Dialogo";
import { useState } from "react";

export default function Cadastro() {
    const { formularioMetodosCadastro, cadastrar, mensagem, alterarMensagem } = useCadastro(),
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
                    <fieldset
                        color="#abb6c3"
                        style={{
                            paddingTop: 16,
                            paddingBottom: 16,
                            paddingLeft: 56,
                            paddingRight: 56,
                            marginBottom: 32,
                            border: "1px solid #abb6c3",
                            maxWidth: 900,
                            width: "80%",
                        }}
                    >
                        <Typography sx={{ my: 2, color: "#abb6c3" }}>
                            Dados do local
                        </Typography>
                        <FormularioLocal
                            imagemFile={(imagemObjeto) => {
                                alterarImagemFile(imagemObjeto);
                            }}
                        />
                    </fieldset>

                    <fieldset
                        style={{
                            paddingTop: 16,
                            paddingBottom: 16,
                            paddingLeft: 56,
                            paddingRight: 56,
                            marginBottom: 32,
                            border: "1px solid #abb6c3",
                            maxWidth: 900,
                            width: "80%",
                        }}
                    >
                        <Typography sx={{ my: 2, color: "#abb6c3" }}>
                            Dados do administrador do local
                        </Typography>

                        <FormularioUsuario />
                    </fieldset>

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

            {mensagem && (
                <Dialogo
                    aberto={mensagem}
                    aoFechar={() => {
                        alterarMensagem(false);
                    }}
                    titulo={"Sucesso"}
                    subtitulo={"Cadastro realizado com sucesso"}
                    temBotaoFechar
                />
            )}
        </FormProvider>
    );
}
