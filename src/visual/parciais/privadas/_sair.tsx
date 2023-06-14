import useLogin from "@/logica/ganchos/pages/useLogin";
import usePlataforma from "@/logica/ganchos/pages/usePlataforma";
import { parciais } from "@/logica/tipos/globais";
import Dialogo from "@/visual/componentes/retorno/Dialogo/Dialogo";

export default function Sair({
    irPara_listar_objetos,
}: {
    irPara_listar_objetos: () => void;
}) {
    const { deslogar } = useLogin();

    return (
        <>
            <Dialogo
                aberto
                titulo={"Deseja realmente sair?"}
                subtitulo={
                    "Não se preocupe se confirmar, pois poderá retornar aqui a qualquer momento!"
                }
                temBotaoCancelar
                rotuloCancelar={"NÃO"}
                aoCancelar={irPara_listar_objetos}
                temBotaoConfirmar
                rotuloConfirmar={"SIM"}
                aoConfirmar={deslogar}
            />
        </>
    );
}
