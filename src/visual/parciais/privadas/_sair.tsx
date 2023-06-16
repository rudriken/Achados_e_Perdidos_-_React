import useLogin from "@/logica/ganchos/pages/useLogin";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";
import Dialogo from "@/visual/componentes/retorno/Dialogo/Dialogo";

interface SairProps {
    irPara_listar_objetos: (objeto: ObjetoInterface) => void;
}

export default function Sair({ irPara_listar_objetos }: SairProps) {
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
                aoCancelar={() => irPara_listar_objetos({} as ObjetoInterface)}
                temBotaoConfirmar
                rotuloConfirmar={"SIM"}
                aoConfirmar={deslogar}
            />
        </>
    );
}
