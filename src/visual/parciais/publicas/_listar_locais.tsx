import { LocalInterface } from "@/logica/interfaces/interfaces";
import { Container } from "@mui/material";
import Grade from "../../componentes/exibe-dados/Grade/Grade";
import ServicoFormatador from "@/logica/servicos/ServicoFormatador";
import TituloPagina from "../../componentes/exibe-dados/TituloPagina/TituloPagina";

export default function ListarLocais({ locais }: { locais: LocalInterface[] }) {
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
            {locais.map((local, indice) => {
                return (
                    <Grade
                        key={indice}
                        imagem={local.imagem}
                        titulo={local.nome}
                        linha1={ServicoFormatador.linhas1E2DaGrade(local.endereco).linha1}
                        linha2={ServicoFormatador.linhas1E2DaGrade(local.endereco).linha2}
                        rotuloDoBotao={"Ver objetos"}
                        aoClicar={() => {}}
                    />
                );
            })}
        </Container>
    );
}
