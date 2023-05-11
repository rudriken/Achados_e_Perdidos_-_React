import { useState } from "react";
import Botao from "../../entradas/Botao/Botao";
import {
    DialogoConteiner,
    DialogoTitulo,
    DialogoSubtitulo,
    DialogoConteudo,
} from "./Dialogo.style";

interface DialogoProps {
    aberto: boolean;
    titulo: string;
    subtitulo?: string;
    conteudo?: string | JSX.Element;
    rotuloFechar?: string;
    rotuloConfirmar?: string;
    temBotaoFechar?: boolean;
    temBotaoConfirmar?: boolean;
	aoFechar: () => {};
	aoConfirmar: () => {};
}

export default function Dialogo({
    aberto,
    titulo,
    subtitulo,
    conteudo,
    rotuloFechar = "Fechar",
    rotuloConfirmar = "Confirmar",
    temBotaoFechar,
    temBotaoConfirmar,
}: DialogoProps): JSX.Element {
    const larguraBotao = 120;
    const margemBotao = 8;
	const [abrir, alterarAbrir] = useState(aberto);

    return (
        <DialogoConteiner open={abrir}>
            <DialogoTitulo>{titulo}</DialogoTitulo>
            <DialogoConteudo>
                <DialogoSubtitulo>{subtitulo}</DialogoSubtitulo>
                {conteudo}
                <div
                    style={{
                        marginTop: 32,
                        display: "flex",
                        justifyContent: "flex-end",
                        height: 66,
                    }}
                >
                    <div style={{ width: larguraBotao + 2 * margemBotao }}>
                        {temBotaoFechar ? (
                            <Botao
                                texto={rotuloFechar}
                                cor={"info"}
                                modo={"text"}
                                largura={larguraBotao}
                                margem={margemBotao}
								aoClicar={() => alterarAbrir(false)}
                            />
                        ) : null}
                    </div>
                    <div style={{ width: larguraBotao + 2 * margemBotao }}>
                        {temBotaoConfirmar ? (
                            <Botao
                                texto={rotuloConfirmar}
                                cor={"primary"}
                                modo={"contained"}
                                largura={larguraBotao}
                                margem={margemBotao}
                            />
                        ) : null}
                    </div>
                </div>
            </DialogoConteudo>
        </DialogoConteiner>
    );
}
