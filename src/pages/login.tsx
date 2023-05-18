import { Container, Typography } from "@mui/material";
import { FormProvider } from "react-hook-form";
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

                <form onSubmit={handleSubmit(logar)} autoComplete={"on"}>
                    <fieldset
                        style={{
                            paddingTop: 16,
                            paddingBottom: 16,
                            paddingLeft: 56,
                            paddingRight: 56,
                            marginBottom: 32,
                        }}
                    >
                        <FormularioLogin />
                    </fieldset>

                    {erro && (
                        <Typography color={"error"} textAlign={"center"} marginBottom={1}>
                            Usuário ou senha inválido
                        </Typography>
                    )}

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Botao
                            texto={"Entrar"}
                            modo={"contained"}
                            tipo={"submit"}
                            cor={"primary"}
                            desabilitado={false}
                        />
                    </div>
                </form>
            </Container>
        </FormProvider>
    );
}
