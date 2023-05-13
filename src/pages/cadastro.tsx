import { Container } from "@mui/material";
import Botao from "@/visual/componentes/entradas/Botao/Botao";
import { CampoDeTexto } from "@/visual/componentes/entradas/CampoDeTexto/CampoDeTexto.style";
import TituloPagina from "@/visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import Cabecalho from "@/visual/componentes/superficies/Cabecalho/Cabecalho";
import { useForm, Controller } from "react-hook-form";
import { Cadastro } from "@/logica/interfaces/cadastro";
import CampoDeArquivo from "@/visual/componentes/entradas/CampoDeArquivo/CampoDeArquivo";

export default function Cadastro() {
    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<Cadastro>();

    function teste1(dados: object) {
        console.log(dados);
    }

    return (
        <Container
            style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}
        >
            <Cabecalho imagem={"img/logos/logo.svg"} />
            <TituloPagina
                titulo={"Cadastrar-se na plataforma"}
                subtitulo={"Primeiro vamos precisar de alguns dados pessoais"}
            />
            <form onSubmit={handleSubmit(teste1)} autoComplete={"on"}>
                <fieldset style={{ borderColor: "gray", marginBottom: 32 }}>
                    <fieldset
                        style={{ border: "none", margin: 32, padding: 20, fontSize: 20 }}
                    >
                        <legend style={{ fontFamily: `Arial` }}>Dados do Local</legend>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Controller
                                control={control}
                                name={"nome"}
                                defaultValue={""}
                                render={({ field }) => {
                                    return (
                                        <CampoDeTexto
                                            value={field.value}
                                            onChange={(valor) =>
                                                field.onChange(valor.target.value)
                                            }
                                            label={"Nome do local"}
                                            placeholder={"Digite o nome do local"}
                                            required
                                            error={errors?.nome !== undefined}
                                            helperText={errors?.nome?.message}
                                        />
                                    );
                                }}
                            />
                            <Controller
                                control={control}
                                name={"endereco"}
                                defaultValue={""}
                                render={({ field }) => {
                                    return (
                                        <CampoDeTexto
                                            value={field.value}
                                            onChange={(valor) =>
                                                field.onChange(valor.target.value)
                                            }
                                            label={"Endereço"}
                                            placeholder={"Digite o endereço"}
                                            required
                                            error={errors?.endereco !== undefined}
                                            helperText={errors?.endereco?.message}
                                        />
                                    );
                                }}
                            />
                            <Controller
                                control={control}
                                name={"contato"}
                                defaultValue={""}
                                render={({ field }) => {
                                    return (
                                        <CampoDeTexto
                                            value={field.value}
                                            onChange={(valor) =>
                                                field.onChange(valor.target.value)
                                            }
                                            label={"Modos de contato"}
                                            placeholder={
                                                "Digite o modo como o usuário pode entrar em contato com você"
                                            }
                                            required
                                            error={errors?.contato !== undefined}
                                            helperText={errors?.contato?.message}
                                        />
                                    );
                                }}
                            />
                            <Controller
                                control={control}
                                name={"descricao"}
                                defaultValue={""}
                                render={({ field }) => {
                                    return (
                                        <CampoDeTexto
                                            value={field.value}
                                            onChange={(valor) =>
                                                field.onChange(valor.target.value)
                                            }
                                            label={"Descrição"}
                                            placeholder={"Digite a descriçao do local"}
                                            required
                                            error={errors?.descricao !== undefined}
                                            helperText={errors?.descricao?.message}
                                        />
                                    );
                                }}
                            />
                            <Controller
                                control={control}
                                name={"imagem_local"}
                                defaultValue={""}
                                render={({ field }) => {
                                    return (
                                        <CampoDeArquivo
                                            value={field.value}
                                            onChange={(valor) =>
                                                field.onChange(valor.item(0)?.name)
                                            }
                                            label={"Imagem do local"}
                                            placeholder={"Selecione a imagem do local"}
                                            required
                                            error={errors?.imagem_local !== undefined}
                                            helperText={errors?.imagem_local?.message}
                                        />
                                    );
                                }}
                            />
                        </div>
                    </fieldset>
                </fieldset>

                <fieldset style={{ borderColor: "gray", marginBottom: 32 }}>
                    <fieldset
                        style={{ border: "none", margin: 32, padding: 20, fontSize: 20 }}
                    >
                        <legend style={{ fontFamily: `Arial` }}>
                            Dados do administrador do Local
                        </legend>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Controller
                                control={control}
                                name={"usuario.nome"}
                                defaultValue={""}
                                render={({ field }) => {
                                    return (
                                        <CampoDeTexto
                                            value={field.value}
                                            onChange={(valor) =>
                                                field.onChange(valor.target.value)
                                            }
                                            label={"Nome"}
                                            placeholder={"Digite o seu nome completo"}
                                            required
                                            error={errors?.usuario?.nome !== undefined}
                                            helperText={errors?.usuario?.nome?.message}
                                        />
                                    );
                                }}
                            />
                            <Controller
                                control={control}
                                name={"usuario.email"}
                                defaultValue={""}
                                render={({ field }) => {
                                    return (
                                        <CampoDeTexto
                                            value={field.value}
                                            onChange={(valor) =>
                                                field.onChange(valor.target.value)
                                            }
                                            label={"E-mail"}
                                            placeholder={"Digite o seu e-mail"}
                                            type={"email"}
                                            required
                                            error={errors?.usuario?.email !== undefined}
                                            helperText={errors?.usuario?.email?.message}
                                        />
                                    );
                                }}
                            />
                            <Controller
                                control={control}
                                name={"usuario.password"}
                                defaultValue={""}
                                render={({ field }) => {
                                    return (
                                        <CampoDeTexto
                                            value={field.value}
                                            onChange={(valor) =>
                                                field.onChange(valor.target.value)
                                            }
                                            label={"Senha"}
                                            placeholder={"Digite a sua senha"}
                                            required
                                            type={"password"}
                                            error={errors?.usuario?.password !== undefined}
                                            helperText={errors?.usuario?.password?.message}
                                        />
                                    );
                                }}
                            />
                            <Controller
                                control={control}
                                name={"usuario.password_confirmation"}
                                defaultValue={""}
                                render={({ field }) => {
                                    return (
                                        <CampoDeTexto
                                            value={field.value}
                                            onChange={(valor) =>
                                                field.onChange(valor.target.value)
                                            }
                                            label={"Confirme a sua senha"}
                                            placeholder={"Confirme a sua senha"}
                                            required
                                            type={"password"}
                                            error={
                                                errors?.usuario?.password_confirmation !==
                                                undefined
                                            }
                                            helperText={
                                                errors?.usuario?.password_confirmation
                                                    ?.message
                                            }
                                        />
                                    );
                                }}
                            />
                        </div>
                    </fieldset>
                </fieldset>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Botao
                        texto={"Cadastre-se"}
                        modo={"contained"}
                        tipo={"submit"}
                        desabilitado={false}
                    />
                </div>
            </form>
        </Container>
    );
}
