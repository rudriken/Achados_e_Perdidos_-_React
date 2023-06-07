import { alinhamentoFonteTipo } from "@/logica/tipos/tipagem";
import { Elo as Link } from "./Elo.style";

interface EloProps {
    rotulo: string;
    url?: string;
    fonteTamanho?: number;
    fonteCor?: string;
    fonteAlinhamento?: alinhamentoFonteTipo;
    acao?: () => void;
}

export default function Elo({
    rotulo,
    url,
    fonteTamanho = 18,
    fonteCor = "#abb6c3",
    fonteAlinhamento = "center",
    acao,
}: EloProps) {
    return (
        <>
            <Link
                href={url}
                style={{
                    fontSize: fonteTamanho,
                    color: fonteCor,
                    textAlign: fonteAlinhamento,
                }}
                onClick={acao}
            >
                {rotulo}
            </Link>
        </>
    );
}
