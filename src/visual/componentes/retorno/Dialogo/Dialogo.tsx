import { useState } from "react";
import {
    DialogoConteiner,
    DialogoTitulo,
    DialogoSubtitulo,
    DialogoConteudo,
} from "./Dialogo.style";
import Botao from "../../entradas/Botao/Botao";

interface DialogoProps {
    aberto: boolean;
    titulo: string;
    subtitulo?: string;
    conteudo?: string | JSX.Element;
    rotuloCancelar?: string;
    rotuloConfirmar?: string;
    temBotaoCancelar?: boolean;
    temBotaoConfirmar?: boolean;
    aoCancelar?: () => void;
    aoConfirmar?: () => void;
}

export default function Dialogo({
    aberto,
    titulo,
    subtitulo,
    conteudo,
    rotuloCancelar = "Cancelar",
    rotuloConfirmar = "Confirmar",
    temBotaoCancelar,
    temBotaoConfirmar,
    aoCancelar,
    aoConfirmar,
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
                        {temBotaoCancelar ? (
                            <Botao
                                texto={rotuloCancelar}
                                cor={"info"}
                                modo={"text"}
                                largura={larguraBotao}
                                margem={margemBotao}
                                aoClicar={() => {
                                    alterarAbrir(false);
                                    aoCancelar?.();
                                }}
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
                                aoClicar={() => {
                                    alterarAbrir(false);
                                    aoConfirmar?.();
                                }}
                            />
                        ) : null}
                    </div>
                </div>
            </DialogoConteudo>
        </DialogoConteiner>
    );
}
