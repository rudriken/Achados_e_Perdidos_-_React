import { useRef } from "react";
import ServicoFormatador from "@/logica/servicos/ServicoFormatador";
import Elo from "../Elo/Elo";
import BotaoDoUsuario from "../../entradas/BotaoDoUsuario/BotaoDoUsuario";
import { CardapioConteiner, CardapioMenu } from "./Cardapio.style";

interface CardapioProps {
    usuario: string;
    abrir: boolean;
    opcoes: string[];
    quandoClicar?: (evento: React.MouseEvent) => void;
    quandoMenuAberto?: (evento: React.MouseEvent) => void;
    quandoFecharMenu?: (evento: React.MouseEvent) => void;
}

export default function Cardapio({
    usuario,
    abrir,
    opcoes,
    quandoClicar,
    quandoMenuAberto,
    quandoFecharMenu,
}: CardapioProps) {
    const conteinerRef = useRef(null);

    return (
        <CardapioConteiner ref={conteinerRef}>
            <BotaoDoUsuario nome={usuario} onClick={quandoClicar} />
            <CardapioMenu
                open={abrir}
                anchorEl={conteinerRef.current}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                onClick={quandoMenuAberto}
                onClose={quandoFecharMenu}
            >
                {opcoes.map((opcao, indice) => {
                    return (
                        <li key={indice}>
                            <Elo
                                rotulo={opcao}
                                url={`/${ServicoFormatador.transformarString(opcao)}`}
                            />
                        </li>
                    );
                })}
            </CardapioMenu>
        </CardapioConteiner>
    );
}
