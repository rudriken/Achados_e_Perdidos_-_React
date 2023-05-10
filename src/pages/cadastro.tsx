import Botao from "@/visual/componentes/entradas/Botao/Botao";
import { CampoDeTexto } from "@/visual/componentes/entradas/CampoDeTexto/CampoDeTexto.style";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import { Container } from "@mui/material";

export default function Cadastro() {
    return (
        <Container
            style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
        >
            <Cabecalho imagem={"img/logos/logo.svg"} />
            <TituloPagina
                titulo={"Cadastrar-se na plataforma"}
                subtitulo={"Primeiro vamos precisar de alguns dados pessoais"}
            />
            <form method="GET" action="/">
                <fieldset style={{ borderColor: "gray", marginBottom: 32 }}>
                    <fieldset
                        style={{ border: "none", margin: 32, padding: 20, fontSize: 20 }}
                    >
                        <legend style={{ fontFamily: `Arial` }}>Dados do Local</legend>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <CampoDeTexto
                                label={"Nome do local"}
                                placeholder={"Digite o nome do local"}
                                name={"nome_local"}
                            />
                            <CampoDeTexto
                                label={"Endereço"}
                                placeholder={"Digite o endereço"}
                                name={"endereco"}
                                fullWidth
                            />
                            <CampoDeTexto
                                label={"Modos de contato"}
                                placeholder={
                                    "Digite o modo como o usuário pode entrar em contato com você"
                                }
                                name={"contato"}
                            />
                            <CampoDeTexto
                                label={"Descrição"}
                                placeholder={"Digite a descriçao do local"}
                                name={"descricao"}
                            />
                            <CampoDeTexto
                                label={"Imagem do local"}
                                placeholder={"Selecione a imagem do local"}
                                name={"imagem_local"}
                            />
                        </div>
                    </fieldset>
                </fieldset>
                <fieldset style={{ borderColor: "gray", marginBottom: 32 }}>
                    <fieldset
                        style={{ border: "none", margin: 32, padding: 20, fontSize: 20 }}
                    >
                        <legend style={{ fontFamily: `Arial` }}>
                            Dados do administrador do Local
                        </legend>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <CampoDeTexto
                                label={"Nome"}
                                placeholder={"Digite o seu nome completo"}
                                name={"nome"}
                            />
                            <CampoDeTexto
                                label={"E-mail"}
                                placeholder={"Digite o seu e-mail"}
                                name={"email"}
                                fullWidth
                            />
                            <CampoDeTexto
                                label={"Senha"}
                                placeholder={"Digite a sua senha"}
                                name={"senha"}
                            />
                            <CampoDeTexto
                                label={"Confirme a sua senha"}
                                placeholder={"Confirme a sua senha"}
                                name={"confirmar_senha"}
                            />
                        </div>
                    </fieldset>
                </fieldset>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Botao texto={"Cadastre-se"} modo={"contained"} tipo={"submit"} />
                </div>
            </form>
        </Container>
    );
}
