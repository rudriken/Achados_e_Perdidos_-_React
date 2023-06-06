import { useContext, useState } from "react";
import { ContextoDoLocalUsuario } from "@/logica/contextos/ContextoDoLocalUsuario";
import { ProvedorDosObjetos } from "@/logica/contextos/ContextoDosObjetos";
import usePlataforma from "@/logica/ganchos/pages/usePlataforma";
import { parciais } from "@/logica/tipos/globais";
import ListarObjetos from "@/visual/parciais/_listar_objetos";
import AdicionarNovoObjeto from "@/visual/parciais/_adicionar_novo_objeto";
import EditarObjeto from "@/visual/parciais/_editar_objeto";
import ExcluirObjeto from "@/visual/parciais/_excluir_objeto";
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
                        adicionar_novo_objeto={() => {
                            alterarParcial(parciais[1]);
                        }}
                        editar_objeto={(objeto) => {
                            alterarObjeto(objeto);
                            alterarParcial(parciais[2]);
                        }}
                        apagar_objeto={(objeto) => {
                            alterarObjeto(objeto);
                            alterarParcial(parciais[3]);
                        }}
                    />
                </ProvedorDosObjetos>
            )}

            {parcial === parciais[1] && (
                <AdicionarNovoObjeto
                    listar_objetos={() => {
                        alterarParcial(parciais[0]);
                    }}
                />
            )}

            {parcial === parciais[2] && (
                <EditarObjeto
                    listar_objetos={() => {
                        alterarParcial(parciais[0]);
                    }}
                    objeto={objeto}
                />
            )}

            {parcial === parciais[3] && (
                <ExcluirObjeto
                    objeto={objeto}
                    listar_objetos={() => {
                        alterarParcial(parciais[0]);
                    }}
                />
            )}
        </>
    );
}
