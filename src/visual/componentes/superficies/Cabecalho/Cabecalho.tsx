import {
    CabecalhoConteiner,
    CabecalhoLogo,
    CabecalhoLink,
    CabecalhoBotao,
} from "./Cabecalho.style";
import Botao from "../../entradas/Botao/Botao";

interface CabecalhoProps {
    imagem: string;
    link?: string;
    botao?: string;
}

export default function Cabecalho({ imagem, link, botao }: CabecalhoProps): JSX.Element {
    return (
        <CabecalhoConteiner>
            <CabecalhoLogo src={imagem} alt={"Achados e Perdidos"} />
            <CabecalhoLink>{link ? <Botao texto={link} /> : <div></div>}</CabecalhoLink>
            <CabecalhoBotao>
                {botao ? (
                    <Botao modo={"contained"} cor={"primary"} texto={botao} largura={250} />
                ) : (
                    <div></div>
                )}
            </CabecalhoBotao>
        </CabecalhoConteiner>
    );
}
