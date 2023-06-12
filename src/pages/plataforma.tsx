import { useEffect, useState } from "react";
import usePlataforma from "@/logica/ganchos/pages/usePlataforma";
import { parciais } from "@/logica/tipos/globais";
import ListarObjetos from "@/visual/parciais/privadas/_listar_objetos";
import AdicionarObjeto from "@/visual/parciais/privadas/_adicionar_objeto";
import ExibirObjeto from "@/visual/parciais/privadas/_exibir_objeto";
import EditarObjeto from "@/visual/parciais/privadas/_editar_objeto";
import ApagarObjeto from "@/visual/parciais/privadas/_apagar_objeto";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";

export default function Plataforma() {
    const {
        parcial,
        alterarParcial,
        estadoDosObjetos,
        despachoDosObjetos,
        estadoDoLocalUsuario,
        pegarObjetos,
    } = usePlataforma();
    const { usuario } = estadoDoLocalUsuario.local;
    const { objetos, buscando } = estadoDosObjetos;
    const [objeto, alterarObjeto] = useState({} as ObjetoInterface);
    const [novosObjetos, alterarNovosObjetos] = useState([] as ObjetoInterface[]);

    useEffect(() => {
        (async () => {
            await pegarObjetos();
            alterarParcial(parciais.privadas[0]);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        despachoDosObjetos({ tipo: "ATUALIZAR_OBJETOS", carga: novosObjetos });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [novosObjetos]);

    return (
        <>
            <Cabecalho
                usuario={usuario.nome}
                imagem={"img/logos/logo.svg"}
                link={"Objetos"}
                cardapio={["Alterar Dados", "Sair"]}
            />
            {(parcial === parciais.privadas[0] || parcial === parciais.privadas[4]) && (
                <ListarObjetos
                    objetos={objetos}
                    buscando={buscando}
                    irPara_adicionar_objeto={() => {
                        alterarParcial(parciais.privadas[1]);
                    }}
                    irPara_exibir_objeto={(objeto) => {
                        alterarObjeto(objeto);
                        alterarParcial(parciais.privadas[2]);
                    }}
                    irPara_editar_objeto={(objeto) => {
                        alterarObjeto(objeto);
                        alterarParcial(parciais.privadas[3]);
                    }}
                    irPara_apagar_objeto={(objeto) => {
                        alterarObjeto(objeto);
                        alterarParcial(parciais.privadas[4]);
                    }}
                />
            )}

            {parcial === parciais.privadas[1] && (
                <AdicionarObjeto
                    irPara_listar_objetos={(objetoCriado) => {
                        alterarNovosObjetos([...objetos, objetoCriado]);
                        alterarParcial(parciais.privadas[0]);
                    }}
                />
            )}

            {parcial === parciais.privadas[2] && (
                <ExibirObjeto
                    objeto={objeto}
                    irPara_listar_objetos={(_objetoExibido) => {
                        alterarParcial(parciais.privadas[0]);
                    }}
                />
            )}

            {parcial === parciais.privadas[3] && (
                <EditarObjeto
                    objeto={objeto}
                    irPara_listar_objetos={(objetoEditado) => {
                        alterarNovosObjetos(
                            objetos.map((objeto) => {
                                if (objeto.id === objetoEditado.id) {
                                    return objetoEditado;
                                }
                                return objeto;
                            })
                        );
                        alterarParcial(parciais.privadas[0]);
                    }}
                />
            )}

            {parcial === parciais.privadas[4] && (
                <ApagarObjeto
                    objeto={objeto}
                    atualizar_lista_objetos={(objetoExcluido) => {
                        alterarNovosObjetos(
                            objetos.filter((objeto) => objeto.id !== objetoExcluido.id)
                        );
                    }}
                    irPara_listar_objetos={(_objetoExcluido) => {
                        alterarParcial(parciais.privadas[0]);
                    }}
                />
            )}
        </>
    );
}
