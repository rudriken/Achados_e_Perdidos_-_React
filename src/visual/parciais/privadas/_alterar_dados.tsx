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
import Dialogo from "@/visual/componentes/retorno/Dialogo/Dialogo";
import { conjuntoDeCampo } from "@/logica/tipos/globais";
import { LocalUsuarioInterface } from "@/logica/interfaces/interfaces";

interface AlterarDadosProps {
    localUsuario: LocalUsuarioInterface;
    irPara_listar_objetos: () => void;
    irPara_excluir_local: () => void;
}

export default function AlterarDados({
    localUsuario,
    irPara_listar_objetos,
    irPara_excluir_local,
}: AlterarDadosProps) {
    const local = localUsuario;
    const usuario = localUsuario.usuario;
    const {
            formularioMetodosAlteracaoDados,
            atualizar,
            sucesso,
            erro,
            atualizarContextoDoLocalUsuario,
            campoLocalAlterado,
            alterarCampoLocalAlterado,
            campoUsuarioAlterado,
            alterarCampoUsuarioAlterado,
            esperar,
            excluirLocal,
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
                        />
                    </fieldset>

                    <Botao
                        texto={"Atualizar"}
                        modo={"contained"}
                        tipo={"submit"}
                        cor={"primary"}
                        largura={200}
                        fonteTamanho={16}
                        desabilitado={
                            (!campoLocalAlterado && !campoUsuarioAlterado) || esperar
                        }
                        margemInferior={64}
                    />
                </form>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <fieldset {...conjuntoDeCampo}>
                        <Typography sx={{ my: 1, color: "#abb6c3", fontWeight: "bold" }}>
                            Excluir local da plataforma
                        </Typography>
                        <Typography sx={{ my: 1, color: "#abb6c3" }}>
                            Tem certeza de que deseja excluir o local da plataforma? Todos os
                            itens cadastrados serão excluídos junto com o local.
                        </Typography>

                        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                            <Botao
                                texto={"Excluir local"}
                                modo={"contained"}
                                cor={"error"}
                                largura={150}
                                fonteTamanho={16}
                                margemInferior={8}
                                margemSuperior={32}
                                aoClicar={irPara_excluir_local}
                            />
                        </div>
                    </fieldset>
                </div>
            </Container>

            {sucesso && (
                <Dialogo
                    aberto={sucesso}
                    titulo={"Sucesso!"}
                    subtitulo={"Alteração cadastral feita com sucesso!"}
                    temBotaoCancelar
                    rotuloCancelar={"Voltar"}
                    aoCancelar={() => {
                        atualizarContextoDoLocalUsuario();
                        irPara_listar_objetos();
                    }}
                />
            )}
        </FormProvider>
    );
}
