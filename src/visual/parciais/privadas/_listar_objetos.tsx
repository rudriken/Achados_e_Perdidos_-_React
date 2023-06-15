import React, { useState } from "react";
import { Container, Skeleton, Typography } from "@mui/material";
import TituloPagina from "../../componentes/exibe-dados/TituloPagina/TituloPagina";
import Tabela, { T_Celula, T_Linha } from "../../componentes/exibe-dados/Tabela/Tabela";
import Botao from "../../componentes/entradas/Botao/Botao";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";
import Elo from "../../componentes/navegacao/Elo/Elo";

interface ListarObjetosProps {
    objetos: ObjetoInterface[];
    buscando: boolean;
    irPara_adicionar_objeto: () => void;
    irPara_exibir_objeto: (objeto: ObjetoInterface) => void;
    irPara_editar_objeto: (objeto: ObjetoInterface) => void;
    irPara_apagar_objeto: (objeto: ObjetoInterface) => void;
    irPara_informar_dono: (objeto: ObjetoInterface) => void;
}

export default function ListarObjetos({
    objetos,
    buscando,
    irPara_adicionar_objeto,
    irPara_exibir_objeto,
    irPara_editar_objeto,
    irPara_apagar_objeto,
    irPara_informar_dono,
}: ListarObjetosProps) {
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
                            ...objeto,
                            acoes: (
                                <>
                                    <Botao
                                        texto={"Editar"}
                                        altura={40}
                                        cor={"success"}
                                        aoClicar={() => irPara_editar_objeto(objeto)}
                                        desabilitado={
                                            objeto.links.filter((link) => link.rel === "self")
                                                .length === 0
                                        }
                                    />
                                    <Botao
                                        texto={"Apagar"}
                                        altura={40}
                                        cor={"error"}
                                        aoClicar={() => irPara_apagar_objeto(objeto)}
                                        desabilitado={
                                            objeto.links.filter(
                                                (link) => link.rel === "apagar_objeto"
                                            ).length === 0
                                        }
                                    />

                                    <Botao
                                        texto={
                                            objeto.links.filter(
                                                (link) => link.rel === "definir_dono_objeto"
                                            ).length === 1
                                                ? "Informar Entrega"
                                                : "Objeto já entregue"
                                        }
                                        altura={40}
                                        cor={"info"}
                                        aoClicar={() => irPara_informar_dono(objeto)}
                                        largura={170}
                                        desabilitado={
                                            !(
                                                objeto.links.filter(
                                                    (link) =>
                                                        link.rel === "definir_dono_objeto"
                                                ).length === 1
                                            )
                                        }
                                    />
                                </>
                            ),
                        };
                    })}
                    renderizarLinha={(_item, indice) => {
                        const item = _item as ObjetoInterface;
                        return (
                            <T_Linha key={indice}>
                                <T_Celula>
                                    <Elo
                                        rotulo={item.nome}
                                        fonteTamanho={14}
                                        fonteAlinhamento={"left"}
                                        acao={() => {
                                            const object = objetos.filter(
                                                (obj) => obj.id === item.id
                                            )[0];
                                            irPara_exibir_objeto(object);
                                        }}
                                    />
                                </T_Celula>
                                <T_Celula>
                                    <Elo
                                        rotulo={item.descricao}
                                        fonteTamanho={14}
                                        fonteAlinhamento={"left"}
                                        acao={() => {
                                            const object = objetos.filter(
                                                (obj) => obj.id === item.id
                                            )[0];
                                            irPara_exibir_objeto(object);
                                        }}
                                    />
                                </T_Celula>
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
                aoClicar={irPara_adicionar_objeto}
                tipo={"button"}
            />
        </Container>
    );
}
