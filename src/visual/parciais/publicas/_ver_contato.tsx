import { LocalInterface, ObjetoInterface } from "@/logica/interfaces/interfaces";
import Dialogo from "@/visual/componentes/retorno/Dialogo/Dialogo";
import { Typography } from "@mui/material";

interface VerContatoProps {
    local: LocalInterface;
    objeto: ObjetoInterface;
    irPara_listar_objetos: () => void;
    irPara_index: () => void;
}

export default function VerContato({
    local,
    objeto,
    irPara_listar_objetos,
    irPara_index,
}: VerContatoProps) {
    return (
        <>
            <Dialogo
                aberto
                titulo={"Contato"}
                subtitulo={`Objeto disponível '${objeto.nome}'`}
                conteudo={
                    <Typography>
                        Se esse objeto for seu entre em contato com o departamento de
                        &quot;Achados e Perdidos&quot; pelo contato{" "}
                        <strong style={{ color: "red" }}>{local.contato}</strong>
                    </Typography>
                }
                temBotaoCancelar
                rotuloCancelar={"Fechar"}
                aoCancelar={irPara_listar_objetos}
                temBotaoConfirmar
                rotuloConfirmar={"Nova busca"}
                aoConfirmar={irPara_index}
            />
        </>
    );
}
