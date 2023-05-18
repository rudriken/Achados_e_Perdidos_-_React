import { FormProvider } from "react-hook-form";
import { Container, Typography } from "@mui/material";
import useCadastro from "@/logica/ganchos/pages/useCadastro";
import FormularioLocal from "@/visual/componentes/entradas/Formularios/Formularios/FormularioLocal";
import FormularioUsuario from "@/visual/componentes/entradas/Formularios/Formularios/FormularioUsuario";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import Dialogo from "@/visual/componentes/retorno/Dialogo/Dialogo";

export default function Cadastro() {
    const { formularioMetodosCadastro, cadastrar, mensagem, alterarMensagem } = useCadastro(),
        { handleSubmit } = formularioMetodosCadastro;

    return (
        <FormProvider {...formularioMetodosCadastro}>
            <Cabecalho imagem={"img/logos/logo.svg"} />
            <Container>
                <TituloPagina
                    titulo={"Cadastrar-se na plataforma"}
                    subtitulo={"Primeiro vamos precisar de alguns dados pessoais"}
                />

                <form onSubmit={handleSubmit(cadastrar)} autoComplete={"on"}>
                    <fieldset
                        style={{
                            paddingTop: 16,
                            paddingBottom: 16,
                            paddingLeft: 56,
                            paddingRight: 56,
                            marginBottom: 32,
                        }}
                    >
                        <Typography sx={{ mb: 2, color: "gray" }}>Dados do local</Typography>
                        <FormularioLocal />
                    </fieldset>

                    <fieldset
                        style={{
                            paddingTop: 16,
                            paddingBottom: 16,
                            paddingLeft: 56,
                            paddingRight: 56,
                            marginBottom: 32,
                        }}
                    >
                        <Typography sx={{ my: 2, color: "gray" }}>
                            Dados do administrador do local
                        </Typography>
                        <FormularioUsuario />
                    </fieldset>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Botao
                            texto={"Cadastre-se"}
                            modo={"contained"}
                            tipo={"submit"}
                            cor={"primary"}
                            desabilitado={false}
                        />
                    </div>
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
