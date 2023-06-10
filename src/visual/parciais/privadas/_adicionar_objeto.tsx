import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { Container } from "@mui/material";
import useCadastroDeObjeto from "@/logica/ganchos/parciais/useCadastroDeObjeto";
import { FormularioObjeto } from "../../componentes/entradas/Formularios/Formularios";
import TituloPagina from "../../componentes/exibe-dados/TituloPagina/TituloPagina";
import Botao from "../../componentes/entradas/Botao/Botao";
import Dialogo from "../../componentes/retorno/Dialogo/Dialogo";
import { conjuntoDeCampo } from "@/logica/tipos/globais";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";

export default function AdicionarObjeto({
    irPara_listar_objetos,
}: {
    irPara_listar_objetos: (objeto: ObjetoInterface) => void;
}) {
    const { formularioMetodosCadastroObjeto, cadastrarObjeto, mensagem, alterarMensagem } =
            useCadastroDeObjeto(),
        { handleSubmit } = formularioMetodosCadastroObjeto;
    const [imagemFile, alterarImagemFile] = useState({} as File);
    const [objetoCriado, alterarObjetoCriado] = useState({} as ObjetoInterface);

    return (
        <FormProvider {...formularioMetodosCadastroObjeto}>
            <Container>
                <TituloPagina
                    titulo={"Adicionar novo objeto"}
                    subtitulo={"Preencha os dados do objeto que deseja adicionar"}
                />
                <form
                    onSubmit={handleSubmit(async () => {
                        alterarObjetoCriado(
                            (await cadastrarObjeto(
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
                            imagemFileObjeto={(imagemFile) => alterarImagemFile(imagemFile)}
                            novoCadastro
                        />
                    </fieldset>

                    <Botao
                        texto={"Cadastrar"}
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
                    aoCancelar={() => {
                        alterarMensagem(false);
                        irPara_listar_objetos(objetoCriado);
                    }}
                    titulo={"Sucesso!"}
                    subtitulo={"Cadastro do objeto realizado com sucesso!"}
                    temBotaoCancelar
                    rotuloCancelar={"Voltar"}
                />
            )}
        </FormProvider>
    );
}
