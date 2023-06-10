import { useState } from "react";
import useCadastroDeObjeto from "@/logica/ganchos/parciais/useCadastroDeObjeto";
import Dialogo from "../../componentes/retorno/Dialogo/Dialogo";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";

export default function ApagarObjeto({
    objeto,
    irPara_listar_objetos,
}: {
    objeto: ObjetoInterface;
    irPara_listar_objetos: (objeto: ObjetoInterface) => void;
}) {
    const { excluirObjeto, mensagem } = useCadastroDeObjeto();
    const [objetoExcluido, alterarObjetoExcluido] = useState({} as ObjetoInterface);

    return (
        <>
            <Dialogo
                aberto
                titulo={`Excluir o objeto '${objeto.nome}'`}
                subtitulo={"Deseja realmente excluí-lo?"}
                temBotaoCancelar
                rotuloCancelar={"NÃO"}
                temBotaoConfirmar
                rotuloConfirmar={"SIM"}
                aoCancelar={() => {
                    irPara_listar_objetos(objetoExcluido);
                }}
                aoConfirmar={async () => {
                    alterarObjetoExcluido((await excluirObjeto(objeto)) as ObjetoInterface);
                }}
            />
            {mensagem && (
                <Dialogo
                    aberto
                    titulo={"Sucesso!"}
                    subtitulo={`Objeto '${objeto.nome}' excluído com sucesso!`}
                    temBotaoCancelar
                    rotuloCancelar={"Voltar"}
                    aoCancelar={() => {
                        irPara_listar_objetos(objetoExcluido);
                    }}
                />
            )}
        </>
    );
}
