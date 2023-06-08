import { useContext, useEffect, useState } from "react";
import { ContextoDoLocalUsuario } from "@/logica/contextos/ContextoDoLocalUsuario";
import { ContextoDosObjetos } from "@/logica/contextos/ContextoDosObjetos";
import usePlataforma from "@/logica/ganchos/pages/usePlataforma";
import { parciais } from "@/logica/tipos/globais";
import ListarObjetos from "@/visual/parciais/_listar_objetos";
import AdicionarObjeto from "@/visual/parciais/_adicionar_objeto";
import ExibirObjeto from "@/visual/parciais/_exibir_objeto";
import EditarObjeto from "@/visual/parciais/_editar_objeto";
import ApagarObjeto from "@/visual/parciais/_apagar_objeto";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";

export default function Plataforma() {
    const { parcial, alterarParcial } = usePlataforma();
    const { usuario } = useContext(ContextoDoLocalUsuario).estadoDoLocalUsuario.local;
    const { estadoDosObjetos, despachoDosObjetos } = useContext(ContextoDosObjetos);
    let { objetos, buscando } = estadoDosObjetos;
    const [objeto, alterarObjeto] = useState({} as ObjetoInterface);

    // useEffect(() => {
    //     despachoDosObjetos({ tipo: "ATUALIZAR_OBJETOS", carregarAcao: objetos });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [parcial]);

    return (
        <>
            <Cabecalho
                usuario={usuario.nome}
                imagem={"img/logos/logo.svg"}
                link={"Objetos"}
                cardapio={["Alterar Dados", "Sair"]}
            />
            {parcial === parciais[0] && (
                <ListarObjetos
                    objetos={objetos}
                    buscando={buscando}
                    adicionar_objeto={() => {
                        alterarParcial(parciais[1]);
                    }}
                    exibir_objeto={(objeto) => {
                        alterarObjeto(objeto);
                        alterarParcial(parciais[2]);
                    }}
                    editar_objeto={(objeto) => {
                        alterarObjeto(objeto);
                        alterarParcial(parciais[3]);
                    }}
                    apagar_objeto={(objeto) => {
                        alterarObjeto(objeto);
                        alterarParcial(parciais[4]);
                    }}
                />
            )}

            {parcial === parciais[1] && (
                <AdicionarObjeto
                    listar_objetos={(objetoCriado) => {
                        objetos = [...objetos, objetoCriado];
                        despachoDosObjetos({
                            tipo: "ATUALIZAR_OBJETOS",
                            carregarAcao: objetos,
                        });
                        alterarParcial(parciais[0]);
                    }}
                />
            )}

            {parcial === parciais[2] && (
                <ExibirObjeto
                    objeto={objeto}
                    listar_objetos={() => {
                        alterarParcial(parciais[0]);
                    }}
                />
            )}

            {parcial === parciais[3] && (
                <EditarObjeto
                    objeto={objeto}
                    listar_objetos={(objetoEditado) => {
                        objetos = objetos.map((objeto) => {
                            if (objeto.id === objetoEditado.id) {
                                return objetoEditado;
                            }
                            return objeto;
                        });
                        despachoDosObjetos({
                            tipo: "ATUALIZAR_OBJETOS",
                            carregarAcao: objetos,
                        });
                        alterarParcial(parciais[0]);
                    }}
                />
            )}

            {parcial === parciais[4] && (
                <ApagarObjeto
                    objeto={objeto}
                    listar_objetos={(objetoExcluido) => {
                        // console.log(objetoExcluido, objetos);
                        objetos = objetos.filter((objeto) => objeto.id !== objetoExcluido.id);
                        despachoDosObjetos({
                            tipo: "ATUALIZAR_OBJETOS",
                            carregarAcao: objetos,
                        });
                        alterarParcial(parciais[0]);
                    }}
                />
            )}
        </>
    );
}
