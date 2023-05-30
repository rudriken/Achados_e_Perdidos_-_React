import { ContextoDoLocalUsuario } from "@/logica/contextos/ContextoLocalUsuario";
import usePlataforma from "@/logica/ganchos/pages/usePlataforma";
import { parciais } from "@/logica/tipos/globais";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import Listar_objetos from "@/visual/parciais/_listar_objetos";
import { useContext } from "react";

export default function Plataforma() {
    const { parcial, alterarParcial } = usePlataforma();
    const { estadoDoLocalUsuario } = useContext(ContextoDoLocalUsuario);
    console.log(estadoDoLocalUsuario);

    return (
        <>
            <Cabecalho
                imagem={"img/logos/logo.svg"}
                link={"Objetos"}
                botao={"João da Silva"}
            />
            {parcial === parciais[0] && <Listar_objetos />}
        </>
    );
}
