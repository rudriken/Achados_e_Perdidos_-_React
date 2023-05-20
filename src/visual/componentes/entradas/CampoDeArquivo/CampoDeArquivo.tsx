import { ChangeEvent, useState } from "react";
import { TextFieldProps } from "@mui/material";
import { CampoDeArquivoConteiner, IconeDeCarregamento } from "./CampoDeArquivo.style";
import CampoDeTexto from "../CampoDeTexto/CampoDeTexto";

export interface CampoDeArquivoProps extends Omit<TextFieldProps, "onChange"> {
    onChange: (arquivos: FileList) => void;
}

export default function CampoDeArquivo({ onChange, ...outras }: CampoDeArquivoProps) {
    const [caminhoDoArquivo, alterarCaminhoDoArquivo] = useState("");

    function tratarEscolhaDeArquivo(evento: ChangeEvent) {
        const alvo = evento.target as HTMLInputElement;
        const arquivos = alvo.files;
        if (arquivos !== null) {
            alterarCaminhoDoArquivo(arquivos[0]?.name);
            onChange(arquivos);
        }
    }

    return (
        <CampoDeArquivoConteiner>
            <CampoDeTexto
                label={"Selecione o arquivo"}
                value={caminhoDoArquivo}
                InputProps={{
                    endAdornment: <IconeDeCarregamento className={"twf-upload"} />,
                }}
                {...outras}
                fullWidth
            />
            <CampoDeTexto type={"file"} fullWidth onChange={tratarEscolhaDeArquivo} />
        </CampoDeArquivoConteiner>
    );
}
