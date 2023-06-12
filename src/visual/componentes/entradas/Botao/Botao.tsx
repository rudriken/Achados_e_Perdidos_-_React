import { coresTipo, modosTipo, tiposTipo } from "@/logica/tipos/tipagem";
import { BotaoEstilizado } from "./Botao.style";

interface BotaoProps {
    texto: string;
    modo?: modosTipo;
    cor?: coresTipo;
    tipo?: tiposTipo;
    desabilitado?: boolean;
    largura?: number;
    altura?: number;
    margem?: number;
    preenchimento?: number;
    fonteTamanho?: number;
    irPara?: string;
    aoClicar?: (() => void) | ((evento: React.MouseEvent) => void);
}

export default function Botao({
    texto,
    modo = "text",
    cor = "primary",
    tipo = "button",
    desabilitado = false,
    largura = 150,
    altura = 50,
    margem = 0,
    preenchimento = 0,
    fonteTamanho = 18,
    irPara,
    aoClicar,
}: BotaoProps) {
    return (
        <BotaoEstilizado
            variant={modo}
            color={cor}
            type={tipo}
            disabled={desabilitado}
            onClick={aoClicar}
            href={irPara}
            style={{
                width: largura,
                height: altura,
                margin: margem,
                padding: preenchimento,
                fontSize: fonteTamanho,
            }}
        >
            {texto}
        </BotaoEstilizado>
    );
}
