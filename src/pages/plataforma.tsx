import { useContext, useState } from "react";
import { ContextoDoLocalUsuario } from "@/logica/contextos/ContextoDoLocalUsuario";
import { ProvedorDosObjetos } from "@/logica/contextos/ContextoDosObjetos";
import usePlataforma from "@/logica/ganchos/pages/usePlataforma";
import { parciais } from "@/logica/tipos/globais";
import Listar_objetos from "@/visual/parciais/_listar_objetos";
import Adicionar_novo_objeto from "@/visual/parciais/_adicionar_novo_objeto";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import Editar_objeto from "@/visual/parciais/_editar_objeto";
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
                    <Listar_objetos
                        adicionar_novo_objeto={() => alterarParcial(parciais[1])}
                        editar_objeto={(objeto) => {
                            alterarObjeto(objeto);
                            alterarParcial(parciais[2]);
                        }}
                    />
                </ProvedorDosObjetos>
            )}

            {parcial === parciais[1] && (
                <Adicionar_novo_objeto listar_objetos={() => alterarParcial(parciais[0])} />
            )}

            {parcial === parciais[2] && (
                <Editar_objeto
                    listar_objetos={() => alterarParcial(parciais[0])}
                    objeto={objeto}
                />
            )}
        </>
    );
}
