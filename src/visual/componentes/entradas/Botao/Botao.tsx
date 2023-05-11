import { coresTipo, modosTipo, tiposTipo } from "@/logica/tipos/componentes";
import { BotaoEstilizado } from "./Botao.style";

interface BotaoProps {
    texto: string;
    modo?: modosTipo;
    cor?: coresTipo;
    tipo?: tiposTipo;
    desabilitado?: boolean;
    aoClicar?: () => {};
}

export default function Botao({
    texto,
    modo = "text",
    cor = "primary",
    tipo = "button",
    desabilitado = false,
    aoClicar,
}: BotaoProps) {
    return (
        <BotaoEstilizado
            variant={modo}
            color={cor}
            type={tipo}
            disabled={desabilitado}
            onClick={aoClicar}
        >
            {texto}
        </BotaoEstilizado>
    );
}
