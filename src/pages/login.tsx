import { Usuario_Interface } from "@/logica/interfaces/cadastro";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import { CampoDeTexto } from "@/visual/componentes/entradas/CampoDeTexto/CampoDeTexto.style";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ServicoEstruturaFormulario } from "@/logica/servicos/ServicoEstruturaFormulario";

export default function Login() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<Usuario_Interface>({
        resolver: yupResolver(ServicoEstruturaFormulario.login()),
    });

    function formularioSubmetido(dados: Usuario_Interface) {
        console.log(dados);
    }

    return (
        <Container
            style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
        >
            <Cabecalho imagem={"img/logos/logo.svg"} />
            <TituloPagina
                titulo={"Realizar o login"}
                subtitulo={"Realize o login para administrar os objetos cadastrados"}
            />
            <form onSubmit={handleSubmit(formularioSubmetido)}>
                <fieldset style={{ borderColor: "gray", marginBottom: 0 }}>
                    <fieldset
                        style={{ border: "none", margin: 32, padding: 20, fontSize: 20 }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <CampoDeTexto
                                {...register("email")}
                                label={"E-mail"}
                                placeholder={"Digite o seu e-mail"}
                                type={"email"}
                                error={errors?.email !== undefined}
                                helperText={errors?.email?.message}
                            />
                            <CampoDeTexto
                                {...register("password")}
                                label={"Senha"}
                                placeholder={"Digite a sua senha"}
                                type={"password"}
                                error={errors?.password !== undefined}
                                helperText={errors?.password?.message}
                            />
                        </div>
                    </fieldset>
                </fieldset>
                <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
                    <Botao
                        texto={"Entrar"}
                        modo={"contained"}
                        tipo={"submit"}
                        desabilitado={false}
                    />
                </div>
            </form>
        </Container>
    );
}
