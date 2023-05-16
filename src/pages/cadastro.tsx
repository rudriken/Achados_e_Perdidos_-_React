import { Container, Typography } from "@mui/material";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import { useForm, FormProvider } from "react-hook-form";
import { LocalUsuario_Interface } from "@/logica/interfaces/interfaces_internas";
import { yupResolver } from "@hookform/resolvers/yup";
import { Servico_EstruturaFormulario } from "@/logica/servicos/Servico_EstruturaFormulario";
import { Servico_API } from "@/logica/servicos/Servico_API";
import Dialogo from "@/visual/componentes/retorno/Dialogo/Dialogo";
import { useState } from "react";
import Formulario_Local from "@/visual/componentes/entradas/Formularios/Formularios/Formulario_Local";
import Formulario_Usuario from "@/visual/componentes/entradas/Formularios/Formularios/Formulario_Usuario";

export default function Cadastro() {
    const formularioMetodos = useForm<LocalUsuario_Interface>({
            resolver: yupResolver(Servico_EstruturaFormulario.cadastro()),
        }),
        { handleSubmit } = formularioMetodos;
    const [mensagem, alterarMensagem] = useState(false);

    async function formularioSubmetido(dados: LocalUsuario_Interface) {
        try {
            await Servico_API.post<LocalUsuario_Interface>("api/locais", dados);
            alterarMensagem(true);
        } catch (erro) {
            return false;
        }
    }

    return (
        <FormProvider {...formularioMetodos}>
            <Cabecalho imagem={"img/logos/logo.svg"} />
            <Container>
                <TituloPagina
                    titulo={"Cadastrar-se na plataforma"}
                    subtitulo={"Primeiro vamos precisar de alguns dados pessoais"}
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
                        <Typography sx={{ mb: 2, color: "gray" }}>Dados do local</Typography>
                        <Formulario_Local />
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
                        <Formulario_Usuario />
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
                    aoFechar={() => alterarMensagem(false)}
                    titulo={"Sucesso"}
                    subtitulo={"Cadastro realizado com sucesso"}
                    temBotaoFechar
                />
            )}
        </FormProvider>
    );
}
