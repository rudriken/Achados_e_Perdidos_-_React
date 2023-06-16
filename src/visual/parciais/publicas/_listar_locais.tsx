import { LocalInterface } from "@/logica/interfaces/interfaces";
import { Container, Typography } from "@mui/material";
import Grade from "../../componentes/exibe-dados/Grade/Grade";
import ServicoFormatador from "@/logica/servicos/ServicoFormatador";
import TituloPagina from "../../componentes/exibe-dados/TituloPagina/TituloPagina";

export default function ListarLocais({
    nome,
    locais,
    irPara_listar_objetos,
}: {
    nome: string;
    locais: LocalInterface[];
    irPara_listar_objetos: (local: LocalInterface) => void;
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
                        modoDoBotao={"contained"}
                        aoClicar={() => irPara_listar_objetos(local)}
                        desabilitarBotao={
                            local.links.filter((link) => {
                                return link.rel === "objetos_local";
                            }).length === 0
                        }
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
