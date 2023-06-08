import { useState } from "react";
import useCadastroDeObjeto from "@/logica/ganchos/parciais/useCadastroDeObjeto";
import Dialogo from "../componentes/retorno/Dialogo/Dialogo";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";

export default function ApagarObjeto({
    objeto,
    listar_objetos,
}: {
    objeto: ObjetoInterface;
    listar_objetos: (objeto: ObjetoInterface) => void;
}) {
    const { excluirObjeto, mensagem } = useCadastroDeObjeto();
    const [objetoExcluido, alterarObjetoExcluido] = useState({} as ObjetoInterface);

    return (
        <>
            <Dialogo
                aberto
                titulo={`Excluir o objeto '${objeto.nome}'`}
                subtitulo={"Deseja realmente excluí-lo?"}
                temBotaoFechar
                rotuloFechar={"NÃO"}
                temBotaoConfirmar
                rotuloConfirmar={"SIM"}
                aoFechar={() => {
                    listar_objetos(objetoExcluido);
                }}
                aoConfirmar={async () => {
                    alterarObjetoExcluido((await excluirObjeto(objeto)) as ObjetoInterface);
                }}
            />
            {mensagem && (
                <Dialogo
                    aberto
                    titulo={"Sucesso!"}
                    subtitulo={"Objeto excluído com sucesso!"}
                    temBotaoFechar
                    rotuloFechar={"Voltar"}
                    aoFechar={() => {
                        listar_objetos(objetoExcluido);
                    }}
                />
            )}
        </>
    );
}
