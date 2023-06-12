import { modosTipo } from "@/logica/tipos/tipagem";
import Botao from "../../entradas/Botao/Botao";
import {
    GradeBotao,
    GradeConteiner,
    GradeLinha1,
    GradeImagem,
    GradeTitulo,
    GradeLinha2,
} from "./Grade.style";

interface GradeProps {
    imagem: string;
    titulo: string;
    linha1: string;
    linha2: string;
    rotuloDoBotao: string;
    modoDoBotao?: modosTipo;
    aoClicar: () => void;
}

export default function Grade({
    imagem,
    titulo,
    linha1,
    linha2,
    rotuloDoBotao,
    modoDoBotao = "text",
    aoClicar,
}: GradeProps) {
    return (
        <GradeConteiner>
            <GradeImagem>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imagem} alt={titulo} style={{ maxWidth: 432, maxHeight: 300 }} />
            </GradeImagem>
            <GradeTitulo>{titulo}</GradeTitulo>
            <GradeLinha1>{linha1}</GradeLinha1>
            <GradeLinha2>{linha2}</GradeLinha2>
            <GradeBotao>
                <Botao
                    texto={rotuloDoBotao}
                    modo={modoDoBotao}
                    largura={200}
                    altura={40}
                    aoClicar={aoClicar}
                />
            </GradeBotao>
        </GradeConteiner>
    );
}
