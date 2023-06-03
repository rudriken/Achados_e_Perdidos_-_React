import { Container, Skeleton, Typography } from "@mui/material";
import TituloPagina from "../componentes/exibe-dados/TituloPagina/TituloPagina";
import Tabela, { T_Celula, T_Linha } from "../componentes/exibe-dados/Tabela/Tabela";
import Botao from "../componentes/entradas/Botao/Botao";
import { ObjetoDadosInterface } from "@/logica/interfaces/interfaces";
import React, { useContext } from "react";
import { ContextoDosObjetos } from "@/logica/contextos/ContextoDosObjetos";

export default function Listar_objetos() {
    const { objetos, buscando } = useContext(ContextoDosObjetos).estadoDosObjetos;
    return (
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
            {buscando && (
                <Skeleton
                    variant={"rectangular"}
                    width={"100%"}
                    height={100}
                    animation={"wave"}
                />
            )}
            {!buscando && Array.isArray(objetos) && objetos.length > 0 && (
                <Tabela
                    cabecalho={["Nome", "Descrição", "Ações"]}
                    dados={objetos.map((objeto) => {
                        return {
                            nome: objeto.nome,
                            descricao: objeto.descricao,
                            acoes: (
                                <>
                                    {objeto.links.filter((link) => link.rel === "self")
                                        .length === 1 && (
                                        <Botao texto={"Editar"} altura={40} cor={"success"} />
                                    )}
                                    {objeto.links.filter(
                                        (link) => link.rel === "apagar_objeto"
                                    ).length === 1 && (
                                        <Botao texto={"Apagar"} altura={40} cor={"error"} />
                                    )}
                                    {objeto.links.filter(
                                        (link) => link.rel === "definir_dono_objeto"
                                    ).length === 1 && (
                                        <Botao
                                            texto={"Informar Entrega"}
                                            altura={40}
                                            cor={"info"}
                                            largura={170}
                                        />
                                    )}
                                </>
                            ),
                        };
                    })}
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
            )}
            {!buscando && objetos.length === 0 && (
                <Typography color={"red"}>Nenhum objeto cadastrado</Typography>
            )}
            <Botao
                texto={"Novo Objeto"}
                modo={"contained"}
                margem={32}
                desabilitado={buscando}
            />
        </Container>
    );
}
