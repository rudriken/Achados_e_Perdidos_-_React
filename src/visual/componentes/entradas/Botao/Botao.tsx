import { coresTipo, modosTipo, tiposTipo } from "@/logica/tipos/componentes";
import { BotaoEstilizado } from "./Botao.style";

interface BotaoProps {
    texto: string;
    modo?: modosTipo;
    cor?: coresTipo;
    tipo?: tiposTipo;
    desabilitado?: boolean;
    largura?: number;
    margem?: number;
    preenchimento?: number;
    aoClicar?: () => void;
}

export default function Botao({
    texto,
    modo = "text",
    cor = "primary",
    tipo = "button",
    desabilitado = false,
    largura = 150,
    margem = 0,
    preenchimento = 0,
    aoClicar,
}: BotaoProps) {
    return (
        <BotaoEstilizado
            variant={modo}
            color={cor}
            type={tipo}
            disabled={desabilitado}
            onClick={aoClicar}
            style={{ width: largura, margin: margem, padding: preenchimento }}
        >
            {texto}
        </BotaoEstilizado>
    );
}
