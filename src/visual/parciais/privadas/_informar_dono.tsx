import { Container } from "@mui/material";
import { FormProvider } from "react-hook-form";
import useCadastroDeObjeto from "@/logica/ganchos/parciais/useCadastroDeObjeto";
import { conjuntoDeCampo } from "@/logica/tipos/globais";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Dialogo from "@/visual/componentes/retorno/Dialogo/Dialogo";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";
import FormularioInformaDono from "@/visual/componentes/entradas/Formularios/Formularios/FormularioInformaDono";

interface InformarDonoProps {
    objeto: ObjetoInterface;
    irPara_listar_objetos: (objeto: ObjetoInterface) => void;
}

export default function InformarDono({ objeto, irPara_listar_objetos }: InformarDonoProps) {
    const {
            formularioMetodosInformaDono,
            informarDono,
            mensagem,
            alterarMensagem,
            campoAlterado,
            alterarCampoAlterado,
            esperar,
        } = useCadastroDeObjeto(),
        { handleSubmit } = formularioMetodosInformaDono;
    return (
        <FormProvider {...formularioMetodosInformaDono}>
            <Container>
                <TituloPagina
                    titulo={`Informar entrega do objeto '${objeto.nome}'`}
                    subtitulo={"Entre com os dados da pessoa para qual o objeto foi entregue"}
                />
                <form
                    onSubmit={handleSubmit(() => {
                        informarDono(objeto, formularioMetodosInformaDono.getValues());
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
                        <FormularioInformaDono
                            qualquerCampoAlterado={(campoInformeDonoAlterado) => {
                                alterarCampoAlterado(campoInformeDonoAlterado);
                            }}
                        />
                    </fieldset>

                    <Botao
                        texto={"Confirmar entrega ao dono"}
                        modo={"contained"}
                        tipo={"submit"}
                        cor={"primary"}
                        largura={250}
                        fonteTamanho={16}
                        desabilitado={!campoAlterado || esperar}
                    />
                </form>
            </Container>

            {mensagem && (
                <Dialogo
                    aberto={mensagem}
                    titulo={"Sucesso!"}
                    subtitulo={"Dono do objeto definido com sucesso!"}
                    temBotaoCancelar
                    rotuloCancelar={"Voltar"}
                    aoCancelar={() => {
                        alterarMensagem(false);
                        irPara_listar_objetos(objeto);
                    }}
                />
            )}
        </FormProvider>
    );
}
