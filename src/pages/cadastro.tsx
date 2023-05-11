import { useState } from "react";
import { Container } from "@mui/material";
import useCadastro from "@/logica/ganchos/useCadastro";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import { CampoDeTexto } from "@/visual/componentes/entradas/CampoDeTexto/CampoDeTexto.style";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";

export default function Cadastro() {
    const [valorSenha, alterarValorSenha] = useState("");
    const [valorConfirmarSenha, alterarValorConfirmarSenha] = useState("");

    return (
        <Container
            style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
        >
            <Cabecalho imagem={"img/logos/logo.svg"} />
            <TituloPagina
                titulo={"Cadastrar-se na plataforma"}
                subtitulo={"Primeiro vamos precisar de alguns dados pessoais"}
            />
            <form onSubmit={useCadastro}>
                <fieldset style={{ borderColor: "gray", marginBottom: 32 }}>
                    <fieldset
                        style={{ border: "none", margin: 32, padding: 20, fontSize: 20 }}
                    >
                        <legend style={{ fontFamily: `Arial` }}>Dados do Local</legend>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <CampoDeTexto
                                label={"Nome do local"}
                                placeholder={"Digite o nome do local"}
                                name={"nome"}
                                required
                            />
                            <CampoDeTexto
                                label={"Endereço"}
                                placeholder={"Digite o endereço"}
                                name={"endereco"}
                                required
                            />
                            <CampoDeTexto
                                label={"Modos de contato"}
                                placeholder={
                                    "Digite o modo como o usuário pode entrar em contato com você"
                                }
                                name={"contato"}
                                required
                            />
                            <CampoDeTexto
                                label={"Descrição"}
                                placeholder={"Digite a descriçao do local"}
                                name={"descricao"}
                                required
                            />
                            <CampoDeTexto
                                label={"Imagem do local"}
                                placeholder={"Selecione a imagem do local"}
                                name={"imagem_local"}
                                required
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
                                name={"usuario_nome"}
                                required
                            />
                            <CampoDeTexto
                                label={"E-mail"}
                                placeholder={"Digite o seu e-mail"}
                                name={"usuario_email"}
                                type={"email"}
                                required
                            />
                            <CampoDeTexto
                                label={"Senha"}
                                placeholder={"Digite a sua senha"}
                                name={"usuario_password"}
                                type={"password"}
                                required
                                value={valorSenha}
                                onChange={(e) => alterarValorSenha(e.target.value)}
                            />
                            <CampoDeTexto
                                label={"Confirme a sua senha"}
                                placeholder={"Confirme a sua senha"}
                                name={"usuario_password_confirmation"}
                                type={"password"}
                                required
                                value={valorConfirmarSenha}
                                onChange={(e) => alterarValorConfirmarSenha(e.target.value)}
                            />
                        </div>
                    </fieldset>
                </fieldset>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Botao
                        texto={"Cadastre-se"}
                        modo={"contained"}
                        tipo={"submit"}
                        desabilitado={valorSenha !== valorConfirmarSenha || valorSenha === ""}
                    />
                </div>
            </form>
        </Container>
    );
}
