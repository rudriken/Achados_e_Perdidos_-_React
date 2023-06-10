import { Container, Typography } from "@mui/material";
import TituloPagina from "../../componentes/exibe-dados/TituloPagina/TituloPagina";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";
import ServicoFormatador from "@/logica/servicos/ServicoFormatador";
import Botao from "../../componentes/entradas/Botao/Botao";

export default function ExibirObjeto({
    objeto,
    irPara_listar_objetos,
}: {
    objeto: ObjetoInterface;
    irPara_listar_objetos: (objeto: ObjetoInterface) => void;
}) {
    return (
        <Container>
            <TituloPagina
                titulo={`Informações do objeto '${objeto.nome}'`}
                subtitulo={"Aqui mostramos os detalhes cadastrados sobre este objeto"}
            />

            <Typography style={{ fontSize: 20 }}>
                <strong>Nome: </strong>
                <span style={{ color: "blue", fontWeight: "bold" }}>{objeto.nome}</span>
            </Typography>
            <Typography style={{ fontSize: 20, display: "flex" }}>
                <strong>Imagem: </strong>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={objeto.imagem}
                    alt={objeto.nome}
                    style={{
                        minHeight: 400,
                        maxHeight: 400,
                        maxWidth: 900,
                        objectFit: "contain",
                    }}
                />
            </Typography>
            <Typography style={{ fontSize: 20 }}>
                <strong>Descrição: </strong>
                <span style={{ color: "blue", fontWeight: "bold" }}>{objeto.descricao}</span>
            </Typography>
            <Typography style={{ fontSize: 20 }}>
                <strong>Data do cadastro: </strong>
                <span style={{ color: "blue", fontWeight: "bold" }}>
                    {ServicoFormatador.formatarData(objeto.data_cadastro)}
                </span>
            </Typography>
            <Typography style={{ fontSize: 20 }}>
                <strong>Entregue: </strong>
                <span style={{ color: "blue", fontWeight: "bold" }}>
                    {objeto.entregue ? "sim" : <span style={{ color: "red" }}>não</span>}
                </span>
            </Typography>

            <Botao
                texto={"Voltar"}
                modo={"outlined"}
                margem={32}
                aoClicar={() => irPara_listar_objetos(objeto)}
                tipo={"button"}
            />
        </Container>
    );
}
