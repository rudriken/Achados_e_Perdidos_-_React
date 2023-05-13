import { Container } from "@mui/material";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import { CampoDeTexto } from "@/visual/componentes/entradas/CampoDeTexto/CampoDeTexto.style";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import { useForm } from "react-hook-form";
import { Cadastro } from "@/logica/interfaces/cadastro";

export default function Inicial() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<Cadastro>();

    function teste(dados: object) {
        console.log(dados);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(teste)}>
                <Cabecalho imagem={"img/logos/logo.svg"} botao={"Cadastrar um local"} />
                <TituloPagina
                    titulo={"Perdeu um Objeto?"}
                    subtitulo={
                        "Veja se o local onde perdeu seu objeto já está cadastrado na nossa plataforma"
                    }
                />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <CampoDeTexto
                        {...register("nome")}
                        placeholder={"Digite o nome do local"}
                        style={{ maxWidth: "600px", width: "100%" }}
                        error={errors?.nome !== undefined}
                        helperText={errors?.nome?.message}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Botao texto={"Buscar"} modo={"contained"} tipo="submit" />
                </div>
            </form>
        </Container>
    );
}
