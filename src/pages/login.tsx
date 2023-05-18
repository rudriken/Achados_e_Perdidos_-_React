import { UsuarioInterface } from "@/logica/interfaces/FrontInterfaces";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import { Container } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";
import FormularioLogin from "@/visual/componentes/entradas/Formularios/Formularios/FormularioLogin";
import { ServicoLogin } from "@/logica/servicos/ServicoLogin";

export default function Login() {
    const formularioMetodos = useForm<UsuarioInterface>({
            resolver: yupResolver(ServicoEstruturaFormulario.login()),
        }),
        { handleSubmit } = formularioMetodos;

    async function formularioSubmetido(dados: UsuarioInterface) {
        await ServicoLogin.entrar(dados);
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
                        <FormularioLogin />
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
