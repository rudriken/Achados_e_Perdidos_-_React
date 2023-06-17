import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { Container, Typography } from "@mui/material";
import useCadastro from "@/logica/ganchos/pages/useCadastro";
import {
    FormularioLocal,
    FormularioUsuario,
} from "@/visual/componentes/entradas/Formularios/Formularios";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import { conjuntoDeCampo } from "@/logica/tipos/globais";
import { LocalUsuarioInterface } from "@/logica/interfaces/interfaces";
import Dialogo from "@/visual/componentes/retorno/Dialogo/Dialogo";

interface AlterarDadosProps {
    localUsuario: LocalUsuarioInterface;
    irPara_listar_objetos: () => void;
}

export default function AlterarDados({
    localUsuario,
    irPara_listar_objetos,
}: AlterarDadosProps) {
    const local = localUsuario;
    const usuario = localUsuario.usuario;
    const {
            formularioMetodosAlteracaoDados,
            atualizar,
            sucesso,
            erro,
            irParaParaAreaPrivada,
            campoLocalAlterado,
            alterarCampoLocalAlterado,
            campoUsuarioAlterado,
            alterarCampoUsuarioAlterado,
        } = useCadastro(),
        { handleSubmit } = formularioMetodosAlteracaoDados;
    const [imagemFile, alterarImagemFile] = useState({} as File);
    return (
        <FormProvider {...formularioMetodosAlteracaoDados}>
            <Container>
                <TituloPagina
                    titulo={"Alterar os dados do local"}
                    subtitulo={
                        "Alteração dos dados cadastrais, troca de senha ou exclusão do local"
                    }
                />
                <form
                    onSubmit={handleSubmit(() =>
                        atualizar(formularioMetodosAlteracaoDados.getValues(), imagemFile)
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
                            local={local}
                            imagemFileLocal={(imagemFile) => {
                                alterarImagemFile(imagemFile);
                            }}
                            qualquerCampoAlterado={(campoLocalAlterado) => {
                                alterarCampoLocalAlterado(campoLocalAlterado);
                            }}
                        />
                    </fieldset>

                    <fieldset {...conjuntoDeCampo}>
                        <Typography sx={{ my: 2, color: "#abb6c3" }}>
                            Dados do administrador do local
                        </Typography>

                        <FormularioUsuario
                            usuario={usuario}
                            qualquerCampoAlterado={(campoUsuarioAlterado) => {
                                alterarCampoUsuarioAlterado(campoUsuarioAlterado);
                            }}
                            alteracao
                        />
                    </fieldset>

                    <Botao
                        texto={"Atualizar"}
                        modo={"contained"}
                        tipo={"submit"}
                        cor={"primary"}
                        largura={200}
                        fonteTamanho={16}
                        desabilitado={!campoLocalAlterado && !campoUsuarioAlterado}
                    />
                </form>
            </Container>

            {sucesso && (
                <Dialogo
                    aberto={sucesso}
                    titulo={"Sucesso!"}
                    subtitulo={
                        "Alteração dos dados de local e usuário realizado com sucesso!"
                    }
                    temBotaoCancelar
                    rotuloCancelar={"Voltar"}
                    aoCancelar={irPara_listar_objetos}
                />
            )}
        </FormProvider>
    );
}
