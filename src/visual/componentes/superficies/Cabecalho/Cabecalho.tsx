import Elo from "../../navegacao/Elo/Elo";
import Botao from "../../entradas/Botao/Botao";
import {
    CabecalhoConteiner,
    CabecalhoLogo,
    CabecalhoLink,
    CabecalhoBotao,
} from "./Cabecalho.style";

interface CabecalhoProps {
    imagem: string;
    link: string
    botao?: string;
}

export default function Cabecalho({
    imagem,
    link,
    botao,
}: CabecalhoProps): JSX.Element {
    return (
        <CabecalhoConteiner>
            <CabecalhoLogo src={imagem} alt={"Achados e Perdidos"} />
            <CabecalhoLink>
                {link ? <Elo rotulo={link} url={"/"} /> : <div></div>}
            </CabecalhoLink>
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
