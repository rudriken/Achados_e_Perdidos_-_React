import { ContextoDoLocalUsuario } from "@/logica/contextos/ContextoDoLocalUsuario";
import { ProvedorDosObjetos } from "@/logica/contextos/ContextoDosObjetos";
import usePlataforma from "@/logica/ganchos/pages/usePlataforma";
import { parciais } from "@/logica/tipos/globais";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import Listar_objetos from "@/visual/parciais/_listar_objetos";
import { useContext } from "react";

export default function Plataforma() {
    const { parcial, alterarParcial } = usePlataforma();
    const { usuario } = useContext(ContextoDoLocalUsuario).estadoDoLocalUsuario.local;
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
                    <Listar_objetos />
                </ProvedorDosObjetos>
            )}
        </>
    );
}
