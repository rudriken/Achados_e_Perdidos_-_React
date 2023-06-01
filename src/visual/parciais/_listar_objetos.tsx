import { Container } from "@mui/material";
import TituloPagina from "../componentes/exibe-dados/TituloPagina/TituloPagina";
import Tabela, { T_Celula, T_Linha } from "../componentes/exibe-dados/Tabela/Tabela";
import Botao from "../componentes/entradas/Botao/Botao";
import { ObjetoDadosInterface } from "@/logica/interfaces/interfaces";
import { ProvedorDosObjetos } from "@/logica/contextos/ContextoDosObjetos";

export default function Listar_objetos() {
    return (
        <ProvedorDosObjetos>
            <Container
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <TituloPagina
                    titulo={"Lista de Objetos Disponíveis"}
                    subtitulo={"Lista dos objetos não entregues ao dono"}
                />
                <Tabela
                    cabecalho={["Nome", "Descricao", "Ações"]}
                    dados={[
                        {
                            nome: "tomate",
                            descricao: "'longa vida', vermelho, quase podre",
                            acoes: (
                                <>
                                    <Botao texto={"Editar"} altura={40} cor={"success"} />
                                    <Botao texto={"Apagar"} altura={40} cor={"error"} />
                                    <Botao
                                        texto={"Informar Entrega"}
                                        altura={40}
                                        cor={"info"}
                                        largura={170}
                                    />
                                </>
                            ),
                        },
                        {
                            nome: "banana",
                            descricao: "'nanica', amarela, madura",
                            acoes: (
                                <>
                                    <Botao texto={"Editar"} altura={40} cor={"success"} />
                                    <Botao texto={"Apagar"} altura={40} cor={"error"} />
                                    <Botao
                                        texto={"Informar Entrega"}
                                        altura={40}
                                        cor={"info"}
                                        largura={170}
                                    />
                                </>
                            ),
                        },
                        {
                            nome: "laranja",
                            descricao: "'pêra', verde, amanhã madura",
                            acoes: (
                                <>
                                    <Botao texto={"Editar"} altura={40} cor={"success"} />
                                    <Botao texto={"Apagar"} altura={40} cor={"error"} />
                                    <Botao
                                        texto={"Informar Entrega"}
                                        altura={40}
                                        cor={"info"}
                                        largura={170}
                                    />
                                </>
                            ),
                        },
                    ]}
                    renderizarLinha={(_item, indice) => {
                        const item = _item as ObjetoDadosInterface;
                        return (
                            <T_Linha key={indice}>
                                <T_Celula>{item.nome}</T_Celula>
                                <T_Celula>{item.descricao}</T_Celula>
                                <T_Celula>{item.acoes}</T_Celula>
                            </T_Linha>
                        );
                    }}
                />
                <Botao texto={"Entrar"} modo={"contained"} margem={32} />
            </Container>
        </ProvedorDosObjetos>
    );
}
