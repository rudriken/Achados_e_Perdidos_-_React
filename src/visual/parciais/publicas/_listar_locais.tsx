import { Container, Typography } from "@mui/material";
import useIndex from "@/logica/ganchos/pages/useIndex";
import ServicoFormatador from "@/logica/servicos/ServicoFormatador";
import { ServicoHateoas } from "@/logica/servicos/ServicoHateoas";
import Grade from "../../componentes/exibe-dados/Grade/Grade";
import TituloPagina from "../../componentes/exibe-dados/TituloPagina/TituloPagina";
import { LocalInterface } from "@/logica/interfaces/interfaces";

interface ListarLocaisProps {
    nome: string;
    locais: LocalInterface[];
    irPara_listar_objetos: (local: LocalInterface) => void;
}

export default function ListarLocais({
    nome,
    locais,
    irPara_listar_objetos,
}: ListarLocaisProps) {
    const { alterarEsperar, esperar } = useIndex();
    console.log(esperar);
    return (
        <Container
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <TituloPagina
                titulo={"Locais encontrados"}
                subtitulo={
                    "Clique sobre um local para ver os objetos que estão disponíveis no setor de achados e perdidos"
                }
            />
            {locais.map((local) => {
                return (
                    <Grade
                        key={local.id}
                        imagem={local.imagem}
                        titulo={local.nome}
                        linha1={ServicoFormatador.linhas1E2DaGrade(local.endereco).linha1}
                        linha2={ServicoFormatador.linhas1E2DaGrade(local.endereco).linha2}
                        rotuloDoBotao={"Ver objetos"}
                        modoDoBotao={"contained"}
                        aoClicar={() => {
                            alterarEsperar(true);
                            irPara_listar_objetos(local);
                        }}
                        desabilitarBotao={!ServicoHateoas.objetosLocalBusca(local) || esperar}
                    />
                );
            })}
            {locais.length === 0 && (
                <Typography color={"red"}>
                    Nenhum local cadastrado que tenha em seu nome &quot;{nome}&quot;
                </Typography>
            )}
        </Container>
    );
}
