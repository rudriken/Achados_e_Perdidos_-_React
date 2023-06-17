import { Typography } from "@mui/material";
import useCadastro from "@/logica/ganchos/pages/useCadastro";
import Dialogo from "@/visual/componentes/retorno/Dialogo/Dialogo";

interface ExcluirLocalProps {
    voltarPara_alterar_dados: () => void;
}

export default function ExcluirLocal({ voltarPara_alterar_dados }: ExcluirLocalProps) {
    const { excluirLocal } = useCadastro();
    return (
        <>
            <Dialogo
                aberto={true}
                titulo={"Cuidado!"}
                subtitulo={"Tem realmente certeza de que quer excluir a sua conta?"}
                conteudo={
                    <Typography color={"error"}>
                        Esta ação apagará tudo que você já registrou nesta plataforma,
                        incluindo sua conta. Não há volta! <br />
                        Se quer realmente fazer isso, é só clicar em{" "}
                        <strong>&quot;Apagar tudo!&quot;</strong>.
                        <br />
                        Se não, é só <span style={{ color: "green" }}>cancelar</span>!
                    </Typography>
                }
                temBotaoCancelar
                rotuloCancelar={"Cancelar"}
                aoCancelar={voltarPara_alterar_dados}
                temBotaoConfirmar
                rotuloConfirmar={"Apagar tudo!"}
                corDoBotaoConfirmar={"error"}
                aoConfirmar={excluirLocal}
            />
        </>
    );
}
