import { Usuario_Interface } from "@/logica/interfaces/interfaces_internas";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import { Container } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Servico_EstruturaFormulario } from "@/logica/servicos/Servico_EstruturaFormulario";
import Formulario_Login from "@/visual/componentes/entradas/Formularios/Formularios/Formulario_Login";
import { Servico_Login } from "@/logica/servicos/Servico_Login";

export default function Login() {
    const formularioMetodos = useForm<Usuario_Interface>({
            resolver: yupResolver(Servico_EstruturaFormulario.login()),
        }),
        { handleSubmit } = formularioMetodos;

    async function formularioSubmetido(dados: Usuario_Interface) {
        await Servico_Login.entrar(dados);
    }

    return (
        <FormProvider {...formularioMetodos}>
            <Cabecalho imagem={"img/logos/logo.svg"} />
            <Container>
                <TituloPagina
                    titulo={"Realizar o login"}
                    subtitulo={"Realize o login para administrar os objetos cadastrados"}
                />

                <form onSubmit={handleSubmit(formularioSubmetido)} autoComplete={"on"}>
                    <fieldset
                        style={{
                            paddingTop: 16,
                            paddingBottom: 16,
                            paddingLeft: 56,
                            paddingRight: 56,
                            marginBottom: 32,
                        }}
                    >
                        <Formulario_Login />
                    </fieldset>

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
