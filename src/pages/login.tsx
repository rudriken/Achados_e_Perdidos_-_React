import { FormProvider } from "react-hook-form";
import { Container, Typography } from "@mui/material";
import useLogin from "@/logica/ganchos/pages/useLogin";
import FormularioLogin from "@/visual/componentes/entradas/Formularios/Formularios/FormularioLogin";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";

export default function Login() {
    const { formularioMetodosLogin, logar, erro } = useLogin(),
        { handleSubmit } = formularioMetodosLogin;

    return (
        <FormProvider {...formularioMetodosLogin}>
            <Cabecalho imagem={"img/logos/logo.svg"} />
            <Container>
                <TituloPagina
                    titulo={"Realizar o login"}
                    subtitulo={"Realize o login para administrar os objetos cadastrados"}
                />

                <form
                    onSubmit={handleSubmit(logar)}
                    autoComplete={"on"}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <fieldset
                        style={{
                            paddingTop: 24,
                            paddingBottom: 16,
                            paddingLeft: 56,
                            paddingRight: 56,
                            marginBottom: 32,
                            border: "1px solid #abb6c3",
                            maxWidth: 900,
                            width: "80%",
                        }}
                    >
                        <FormularioLogin />
                    </fieldset>

                    <div style={{ marginBottom: 20, height: 16 }}>
                        {erro && (
                            <Typography color={"error"} textAlign={"center"}>
                                Usuário e/ou senha inválido(s)
                            </Typography>
                        )}
                    </div>

                    <Botao
                        texto={"Entrar"}
                        modo={"contained"}
                        tipo={"submit"}
                        cor={"primary"}
                        desabilitado={false}
                    />
                </form>
            </Container>
        </FormProvider>
    );
}
