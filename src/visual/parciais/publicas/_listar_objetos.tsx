import { Container, Typography } from "@mui/material";
import { LocalInterface, ObjetoInterface } from "@/logica/interfaces/interfaces";
import ServicoFormatador from "@/logica/servicos/ServicoFormatador";
import Grade from "@/visual/componentes/exibe-dados/Grade/Grade";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";

export default function ListarObjetos({
    objetos,
    local,
}: {
    objetos: ObjetoInterface[];
    local: LocalInterface;
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
                titulo={`Objetos perdidos no local '${local.nome}'`}
                subtitulo={
                    "Verifique na lista abaixo se o objeto que perdeu está disponível nesse local"
                }
            />
            {objetos.map((objeto, indice) => {
                return (
                    <Grade
                        key={indice}
                        imagem={objeto.imagem}
                        titulo={objeto.nome}
                        linha1={ServicoFormatador.linhas1E2DaGrade(objeto.descricao).linha1}
                        linha2={
                            "Data que o objeto foi cadastrado: " +
                            ServicoFormatador.formatarData(objeto.data_cadastro)
                        }
                        rotuloDoBotao={"Entrar em contato"}
                        modoDoBotao={"contained"}
                        aoClicar={() => {}}
                    />
                );
            })}
            {objetos.length === 0 && (
                <Typography color={"red"}>Nenhum objeto cadastrado</Typography>
            )}
        </Container>
    );
}
