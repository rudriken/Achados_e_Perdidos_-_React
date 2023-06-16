import { Container, Typography } from "@mui/material";
import ServicoFormatador from "@/logica/servicos/ServicoFormatador";
import TituloPagina from "../../componentes/exibe-dados/TituloPagina/TituloPagina";
import Grade from "@/visual/componentes/exibe-dados/Grade/Grade";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";

export default function ExibirObjeto({
    objeto,
    irPara_listar_objetos,
}: {
    objeto: ObjetoInterface;
    irPara_listar_objetos: (objeto: ObjetoInterface) => void;
}) {
    return (
        <Container
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <TituloPagina
                titulo={`Informações do objeto '${objeto.nome}'`}
                subtitulo={"Aqui mostramos os detalhes cadastrados sobre este objeto"}
            />

            <Grade
                imagem={objeto.imagem}
                titulo={objeto.nome}
                linha1={ServicoFormatador.linhas1E2DaGrade(objeto.descricao).linha1}
                linha2={
                    "Data do cadastro: " +
                    ServicoFormatador.formatarData(objeto.data_cadastro)
                }
                rotuloDoBotao={"Voltar"}
                aoClicar={() => irPara_listar_objetos(objeto)}
            />
        </Container>
    );
}
