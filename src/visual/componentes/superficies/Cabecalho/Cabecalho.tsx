import Botao from "../../entradas/Botao/Botao";
import {
    CabecalhoConteiner,
    CabecalhoLogo,
    CabecalhoLink1,
    CabecalhoLink2,
    CabecalhoBotao,
} from "./Cabecalho.style";

interface CabecalhoProps {
    imagem: string;
    link1: string;
    link2?: string;
    botao?: string;
}

export default function Cabecalho({
    imagem,
    link1,
    link2,
    botao = "Teste",
}: CabecalhoProps): JSX.Element {
    return (
        <CabecalhoConteiner>
            <CabecalhoLogo src={imagem} alt={"Achados e Perdidos"} />
            <CabecalhoLink1>{link1 ? <Botao>{link1}</Botao> : <div></div>}</CabecalhoLink1>
            <CabecalhoLink2>{link2 ? <Botao>{link2}</Botao> : <div></div>}</CabecalhoLink2>
            <CabecalhoBotao>
                {botao ? (
                    <Botao variant={"contained"} color={"primary"}>
                        {botao}
                    </Botao>
                ) : (
                    <div></div>
                )}
            </CabecalhoBotao>
        </CabecalhoConteiner>
    );
}
