import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { Container } from "@mui/material";
import useCadastroDeObjeto from "@/logica/ganchos/parciais/useCadastroDeObjeto";
import { FormularioObjeto } from "../componentes/entradas/Formularios/Formularios";
import TituloPagina from "../componentes/exibe-dados/TituloPagina/TituloPagina";
import Botao from "../componentes/entradas/Botao/Botao";
import Dialogo from "../componentes/retorno/Dialogo/Dialogo";
import { conjuntoDeCampo } from "@/logica/tipos/globais";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";

export default function EditarObjeto({
    objeto,
    listar_objetos,
}: {
    objeto: ObjetoInterface;
    listar_objetos: (objeto: ObjetoInterface) => void;
}) {
    const { formularioMetodosCadastroObjeto, alterarObjeto, mensagem, alterarMensagem } =
            useCadastroDeObjeto(),
        { handleSubmit } = formularioMetodosCadastroObjeto;
    const [imagemFile, alterarImagemFile] = useState({} as File);
    const [campoAlterado, alterarCampoAlterado] = useState(false);
    const [objetoEditado, alterarObjetoEditado] = useState({} as ObjetoInterface);

    return (
        <FormProvider {...formularioMetodosCadastroObjeto}>
            <Container>
                <TituloPagina
                    titulo={`Alterar objeto '${objeto.nome}'`}
                    subtitulo={"Altere qualquer dado deste objeto"}
                />
                <form
                    onSubmit={handleSubmit(async () => {
                        alterarObjetoEditado(
                            (await alterarObjeto(
                                objeto,
                                formularioMetodosCadastroObjeto.getValues(),
                                imagemFile
                            )) as ObjetoInterface
                        );
                    })}
                    autoComplete={"on"}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <fieldset {...conjuntoDeCampo}>
                        <FormularioObjeto
                            imagemFileObjeto={(imagem) => alterarImagemFile(imagem)}
                            alteracao
                            objeto={objeto}
                            qualquerCampoAlterado={(campoAlterado) => {
                                alterarCampoAlterado(campoAlterado);
                            }}
                        />
                    </fieldset>

                    <Botao
                        texto={"Salvar Alteração"}
                        modo={"contained"}
                        tipo={"submit"}
                        cor={"primary"}
                        largura={200}
                        fonteTamanho={16}
                        desabilitado={!campoAlterado}
                    />
                </form>
            </Container>

            {mensagem && (
                <Dialogo
                    aberto={mensagem}
                    aoFechar={() => {
                        alterarMensagem(false);
                        listar_objetos(objetoEditado);
                    }}
                    titulo={"Sucesso"}
                    subtitulo={"Objeto alterado com sucesso!"}
                    temBotaoFechar
                    rotuloFechar={"Voltar"}
                />
            )}
        </FormProvider>
    );
}
