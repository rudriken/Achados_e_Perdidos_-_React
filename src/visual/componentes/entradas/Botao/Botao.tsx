import { coresTipo, modosTipo } from "@/logica/tipos/componentes";
import { BotaoEstilizado } from "./Botao.style";

interface BotaoProps {
    texto: string;
    modo?: modosTipo;
    cor?: coresTipo;
}

export default function Botao({ texto, modo = "text", cor = "primary" }: BotaoProps) {
    return (
        <BotaoEstilizado variant={modo} color={cor}>
            {texto}
        </BotaoEstilizado>
    );
}
