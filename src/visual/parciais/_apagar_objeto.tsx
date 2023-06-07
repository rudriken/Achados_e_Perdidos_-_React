import useCadastroDeObjeto from "@/logica/ganchos/parciais/useCadastroDeObjeto";
import Dialogo from "../componentes/retorno/Dialogo/Dialogo";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";

export default function ApagarObjeto({
    objeto,
    listar_objetos,
}: {
    objeto: ObjetoInterface;
    listar_objetos: () => void;
}) {
    const { excluirObjeto, mensagem } = useCadastroDeObjeto();

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
                    listar_objetos();
                }}
                aoConfirmar={async () => {
                    await excluirObjeto(objeto);
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
                        listar_objetos();
                    }}
                />
            )}
        </>
    );
}
