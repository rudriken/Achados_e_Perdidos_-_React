import { useContext, useState } from "react";
import { ContextoDoLocalUsuario } from "@/logica/contextos/ContextoDoLocalUsuario";
import { ProvedorDosObjetos } from "@/logica/contextos/ContextoDosObjetos";
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
    const [objeto, alterarObjeto] = useState({} as ObjetoInterface);
    return (
        <>
            <Cabecalho
                usuario={usuario.nome}
                imagem={"img/logos/logo.svg"}
                link={"Objetos"}
                cardapio={["Alterar Dados", "Sair"]}
            />
            {parcial === parciais[0] && (
                <ProvedorDosObjetos>
                    <ListarObjetos
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
                </ProvedorDosObjetos>
            )}

            {parcial === parciais[1] && (
                <AdicionarObjeto
                    listar_objetos={() => {
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
                    listar_objetos={() => {
                        alterarParcial(parciais[0]);
                    }}
                />
            )}

            {parcial === parciais[4] && (
                <ApagarObjeto
                    objeto={objeto}
                    listar_objetos={() => {
                        alterarParcial(parciais[0]);
                    }}
                />
            )}
        </>
    );
}
