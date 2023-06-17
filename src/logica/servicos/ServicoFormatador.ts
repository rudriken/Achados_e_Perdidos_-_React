import { LocalInterface, ObjetoInterface } from "../interfaces/interfaces";
import { caminhoAbsolutoDaImagem } from "../tipos/globais";

const ServicoFormatador = {
    transformarString: (cadeia: string) => {
        cadeia = cadeia.toLowerCase();
        var comDiacritico = [
            "â",
            "à",
            "á",
            "ã",
            "ê",
            "è",
            "é",
            "î",
            "ì",
            "í",
            "õ",
            "ô",
            "ò",
            "ó",
            "ü",
            "û",
            "ú",
            "ù",
            "ç",
            " ",
        ];

        var semDiacritico = [
            "a",
            "a",
            "a",
            "a",
            "e",
            "e",
            "e",
            "i",
            "i",
            "i",
            "o",
            "o",
            "o",
            "o",
            "u",
            "u",
            "u",
            "u",
            "c",
            "-",
        ];

        var stringTransformada = "";
        for (let c = 0; c < cadeia.length; c++) {
            if (comDiacritico.includes(cadeia[c])) {
                let posicao = comDiacritico.indexOf(cadeia[c]);
                let caractere = semDiacritico[posicao];
                stringTransformada += caractere;
            } else {
                stringTransformada += cadeia[c];
            }
        }
        return stringTransformada;
    },
    caminhoRelativoDaImagem: (
        caminhoImagemBanco: string,
        item: "local" | "objeto"
    ): string => {
        caminhoImagemBanco = caminhoImagemBanco.replace(
            item === "local" ? caminhoAbsolutoDaImagem.local : caminhoAbsolutoDaImagem.objeto,
            ""
        );
        return caminhoImagemBanco;
    },
    formatarData: (data: string): string => {
        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`;
    },
    linhas1E2DaGrade: (cadeia: string) => {
        const palavras = cadeia.split(" ");
        const maximo = 45;
        let palavrasJuntadasLinha1 = "";
        let palavrasJuntadasLinha2 = "";
        let linha1Terminada = false;
        palavras.forEach((palavra) => {
            if (
                palavrasJuntadasLinha1.length + palavra.length <= maximo &&
                !linha1Terminada
            ) {
                palavrasJuntadasLinha1 += palavra + " ";
            } else {
                linha1Terminada = true;
                palavrasJuntadasLinha2 += palavra + " ";
            }
        });
        return { linha1: palavrasJuntadasLinha1, linha2: palavrasJuntadasLinha2 };
    },
    pegarSomenteNumero: (caractere: string) => {
        return caractere.replace(/\D/g, "");
    },
};

export default ServicoFormatador;
