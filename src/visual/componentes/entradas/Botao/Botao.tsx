import { coresTipo, modosTipo, tiposTipo } from "@/logica/tipos/componentes";
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
    aoClicar?: (() => void) | ((evento: React.MouseEvent) => void);
    temImagem?: string;
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
    aoClicar,
    temImagem,
}: BotaoProps) {
    return (
        <BotaoEstilizado
            variant={modo}
            color={cor}
            type={tipo}
            disabled={desabilitado}
            onClick={aoClicar}
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
