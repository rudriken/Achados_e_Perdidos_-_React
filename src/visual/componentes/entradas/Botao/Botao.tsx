import { coresTipo, modosTipo, tiposTipo } from "@/logica/tipos/componentes";
import { BotaoEstilizado } from "./Botao.style";

interface BotaoProps {
    texto: string;
    modo?: modosTipo;
    cor?: coresTipo;
    tipo?: tiposTipo;
    aoClicar?: () => {};
}

export default function Botao({
    texto,
    modo = "text",
    cor = "primary",
    tipo = "button",
    aoClicar,
}: BotaoProps) {
    return (
        <BotaoEstilizado variant={modo} color={cor} onClick={aoClicar} type={tipo}>
            {texto}
        </BotaoEstilizado>
    );
}
