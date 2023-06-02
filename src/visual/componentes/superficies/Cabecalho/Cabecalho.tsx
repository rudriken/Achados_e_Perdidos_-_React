import { useState } from "react";
import { Skeleton } from "@mui/material";
import {
    CabecalhoConteiner,
    CabecalhoLogo,
    CabecalhoLink,
    CabecalhoBotao,
} from "./Cabecalho.style";
import Cardapio from "../../navegacao/Cardapio/Cardapio";
import Botao from "../../entradas/Botao/Botao";

interface CabecalhoProps {
    usuario?: string;
    imagem: string;
    link?: string;
    botao?: string;
    cardapio?: string[];
}

export default function Cabecalho({
    usuario,
    imagem,
    link,
    botao,
    cardapio,
}: CabecalhoProps): JSX.Element {
    const [abrirMenu, alterarAbrirMenu] = useState(false);
    return (
        <CabecalhoConteiner>
            <CabecalhoLogo src={imagem} alt={"Achados e Perdidos"} />
            <CabecalhoLink>{link ? <Botao texto={link} /> : <div></div>}</CabecalhoLink>
            <CabecalhoBotao>
                {botao ? (
                    <Botao modo={"contained"} cor={"primary"} texto={botao} largura={250} />
                ) : cardapio ? null : (
                    <div></div>
                )}
                {cardapio && usuario && (
                    <Cardapio
                        usuario={usuario}
                        abrir={abrirMenu}
                        opcoes={cardapio}
                        quandoClicar={() => alterarAbrirMenu(true)}
                        quandoMenuAberto={() => alterarAbrirMenu(false)}
                        quandoFecharMenu={() => alterarAbrirMenu(false)}
                    />
                )}
                {!usuario && !botao && cardapio && (
                    <Skeleton
                        variant={"rectangular"}
                        width={300}
                        height={50}
                        animation={"wave"}
                    />
                )}
            </CabecalhoBotao>
        </CabecalhoConteiner>
    );
}
