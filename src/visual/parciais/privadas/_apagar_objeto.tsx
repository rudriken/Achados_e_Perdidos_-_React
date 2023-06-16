import { useState } from "react";
import useCadastroDeObjeto from "@/logica/ganchos/parciais/useCadastroDeObjeto";
import Dialogo from "../../componentes/retorno/Dialogo/Dialogo";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";
import { Typography } from "@mui/material";

export default function ApagarObjeto({
    objeto,
    atualizar_lista_objetos,
    irPara_listar_objetos,
}: {
    objeto: ObjetoInterface;
    atualizar_lista_objetos: (objeto: ObjetoInterface) => void;
    irPara_listar_objetos: (objeto: ObjetoInterface) => void;
}) {
    const { excluirObjeto, mensagem } = useCadastroDeObjeto();

    return (
        <>
            <Dialogo
                aberto
                titulo={`Excluir o objeto '${objeto.nome}'`}
                subtitulo={"Deseja realmente excluí-lo?"}
                conteudo={
                    <Typography color={"red"}>
                        Se arrepender não tem perdão! <br />
                        Esta ação apagará definitivamente este objeto do banco de dados
                    </Typography>
                }
                temBotaoCancelar
                rotuloCancelar={"NÃO"}
                aoCancelar={() => {
                    irPara_listar_objetos({} as ObjetoInterface);
                }}
                temBotaoConfirmar
                rotuloConfirmar={"SIM"}
                aoConfirmar={async () => {
                    atualizar_lista_objetos((await excluirObjeto(objeto)) as ObjetoInterface);
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
                        irPara_listar_objetos({} as ObjetoInterface);
                    }}
                />
            )}
        </>
    );
}
