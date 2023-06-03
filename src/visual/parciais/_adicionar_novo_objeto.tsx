import { Container } from "@mui/material";
import TituloPagina from "../componentes/exibe-dados/TituloPagina/TituloPagina";
import { FormularioObjeto } from "../componentes/entradas/Formularios/Formularios";
import useCadastroDeObjeto from "@/logica/ganchos/useCadastroDeObjeto";
import Botao from "../componentes/entradas/Botao/Botao";
import { FormProvider } from "react-hook-form";
import Dialogo from "../componentes/retorno/Dialogo/Dialogo";

export function Adicionar_novo_objeto({ listar_objetos = () => {} }) {
    const { formularioMetodosCadastroObjeto, cadastrar, mensagem, alterarMensagem } =
            useCadastroDeObjeto(),
        { handleSubmit } = formularioMetodosCadastroObjeto;
    return (
        <FormProvider {...formularioMetodosCadastroObjeto}>
            <Container>
                <TituloPagina
                    titulo={"Adicionar novo objeto"}
                    subtitulo={"Preencha os dados do objeto que deseja adicionar"}
                />
                <form
                    onSubmit={handleSubmit(cadastrar)}
                    autoComplete={"on"}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <fieldset
                        color="#abb6c3"
                        style={{
                            paddingTop: 16,
                            paddingBottom: 16,
                            paddingLeft: 56,
                            paddingRight: 56,
                            marginBottom: 32,
                            border: "1px solid #abb6c3",
                            maxWidth: 900,
                            width: "80%",
                        }}
                    >
                        <FormularioObjeto />
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
                    aoFechar={() => {
                        alterarMensagem(false);
                        listar_objetos();
                    }}
                    titulo={"Sucesso"}
                    subtitulo={"Cadastro do objeto realizado com sucesso"}
                    temBotaoFechar
                />
            )}
        </FormProvider>
    );
}
