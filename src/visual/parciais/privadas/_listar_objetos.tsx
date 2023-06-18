import { Container, Skeleton, Typography } from "@mui/material";
import { ServicoHateoas } from "@/logica/servicos/ServicoHateoas";
import TituloPagina from "../../componentes/exibe-dados/TituloPagina/TituloPagina";
import Tabela, { T_Celula, T_Linha } from "../../componentes/exibe-dados/Tabela/Tabela";
import Botao from "../../componentes/entradas/Botao/Botao";
import Elo from "../../componentes/navegacao/Elo/Elo";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";
import { Fragment } from "react";

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
                                        largura={100}
                                        desabilitado={!ServicoHateoas.atualizarObjeto(objeto)}
                                    />
                                    <Botao
                                        texto={"Apagar"}
                                        altura={40}
                                        cor={"error"}
                                        aoClicar={() => irPara_apagar_objeto(objeto)}
                                        largura={100}
                                        desabilitado={!ServicoHateoas.apagarObjeto(objeto)}
                                    />

                                    <Botao
                                        texto={"Informar Entrega"}
                                        altura={40}
                                        cor={"info"}
                                        aoClicar={() => irPara_informar_dono(objeto)}
                                        largura={170}
                                        desabilitado={
                                            !ServicoHateoas.definirDonoObjeto(objeto)
                                        }
                                    />
                                </>
                            ),
                        };
                    })}
                    renderizarLinha={(_item, indice) => {
                        const item = _item as ObjetoInterface;
                        return (
                            <Fragment key={indice}>
                                {ServicoHateoas.definirDonoObjeto(item) && (
                                    <T_Linha>
                                        <T_Celula>
                                            <Elo
                                                rotulo={item.nome}
                                                fonteTamanho={14}
                                                fonteAlinhamento={"left"}
                                                acao={() => {
                                                    if (ServicoHateoas.self(item)) {
                                                        irPara_exibir_objeto(item);
                                                    }
                                                }}
                                            />
                                        </T_Celula>
                                        <T_Celula>
                                            <Elo
                                                rotulo={item.descricao}
                                                fonteTamanho={14}
                                                fonteAlinhamento={"left"}
                                                acao={() => {
                                                    if (ServicoHateoas.self(item)) {
                                                        irPara_exibir_objeto(item);
                                                    }
                                                }}
                                            />
                                        </T_Celula>
                                        <T_Celula>{item.acoes}</T_Celula>
                                    </T_Linha>
                                )}
                            </Fragment>
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
                margemSuperior={32}
                desabilitado={buscando}
                aoClicar={irPara_adicionar_objeto}
                tipo={"button"}
            />
        </Container>
    );
}
