import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ServicoContagemCaracteres } from "@/logica/servicos/ServicoContagemCaracteres";
import ServicoFormatador from "@/logica/servicos/ServicoFormatador";
import { FormularioCampos } from "../Formularios.style";
import CampoDeTexto from "../../CampoDeTexto/CampoDeTexto";
import CampoDeArquivo from "../../CampoDeArquivo/CampoDeArquivo";
import { LocalInterface } from "@/logica/interfaces/interfaces";

interface FormularioLocalProps {
    imagemFileLocal: (imagem: File) => void;
    qualquerCampoAlterado: (valorAlterado: boolean) => void;
    local?: LocalInterface;
}

export function FormularioLocal({
    imagemFileLocal,
    qualquerCampoAlterado,
    local,
}: FormularioLocalProps) {
    console.log(local);
    const {
        control,
        formState: { errors },
        watch,
    } = useFormContext<LocalInterface>();
    const [caracteresDescricao, alterarCaracteresDescricao] = useState(0);
    const caracteresDescricaoMaximo = 255;
    const [imagemFile, alterarImagemFile] = useState({} as File);
    const nomeAlterado = watch("nome") !== local?.nome;
    const enderecoAlterado = watch("endereco") !== local?.endereco;
    const contatoAlterado = watch("contato") !== local?.contato;
    const descricaoAlterada = watch("descricao") !== local?.descricao;
    const imagemAlterada =
        watch("imagem") !==
        ServicoFormatador.caminhoRelativoDaImagem(local?.imagem || "", "local");

    console.log(descricaoAlterada);
    useEffect(() => {
        imagemFileLocal(imagemFile);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imagemFile]);

    useEffect(() => {
        if (
            nomeAlterado ||
            enderecoAlterado ||
            contatoAlterado ||
            descricaoAlterada ||
            imagemAlterada
        ) {
            qualquerCampoAlterado(true);
        } else {
            qualquerCampoAlterado(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nomeAlterado, enderecoAlterado, contatoAlterado, descricaoAlterada, imagemAlterada]);

    return (
        <FormularioCampos>
            <Controller
                control={control}
                name={"nome"}
                defaultValue={local ? local.nome : ""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(elemento) => field.onChange(elemento.target.value)}
                            label={"Nome do local"}
                            placeholder={"Digite o nome do local"}
                            required
                            error={errors?.nome !== undefined}
                            helperText={errors?.nome?.message}
                            style={{ marginBottom: 16 }}
                        />
                    );
                }}
            />
            <Controller
                control={control}
                name={"endereco"}
                defaultValue={local ? local.endereco : ""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(elemento) => field.onChange(elemento.target.value)}
                            label={"Endereço"}
                            placeholder={"Digite o endereço"}
                            required
                            error={errors?.endereco !== undefined}
                            helperText={errors?.endereco?.message}
                            style={{ marginBottom: 16 }}
                        />
                    );
                }}
            />
            <Controller
                control={control}
                name={"contato"}
                defaultValue={local ? local.contato : ""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(elemento) => field.onChange(elemento.target.value)}
                            label={"Modos de contato"}
                            placeholder={
                                "Digite o modo como o usuário pode entrar em contato com você"
                            }
                            required
                            error={errors?.contato !== undefined}
                            helperText={errors?.contato?.message}
                            style={{ marginBottom: 16 }}
                        />
                    );
                }}
            />
            <Controller
                control={control}
                name={"descricao"}
                defaultValue={local ? local.descricao : ""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value === null ? "" : field.value}
                            onChange={(elemento) => {
                                if (
                                    elemento.target.value.length <= caracteresDescricaoMaximo
                                ) {
                                    alterarCaracteresDescricao(
                                        ServicoContagemCaracteres.contar(elemento)
                                    );
                                    field.onChange(elemento.target.value);
                                }
                            }}
                            label={"Descrição"}
                            placeholder={"Digite a descriçao do local"}
                            error={caracteresDescricao === caracteresDescricaoMaximo}
                            helperText={
                                caracteresDescricao === 0
                                    ? undefined
                                    : caracteresDescricao + ` / ${caracteresDescricaoMaximo}`
                            }
                            style={{ marginBottom: 16 }}
                        />
                    );
                }}
            />
            <Controller
                control={control}
                name={"imagem"}
                defaultValue={
                    local
                        ? ServicoFormatador.caminhoRelativoDaImagem(local.imagem, "local")
                        : ""
                }
                render={({ field }) => {
                    return (
                        <CampoDeArquivo
                            value={field.value}
                            onChange={(elemento) => {
                                alterarImagemFile(elemento[0]);
                                field.onChange(elemento.item(0)?.name);
                            }}
                            label={"Imagem do local"}
                            placeholder={"Selecione a imagem do local"}
                            required
                            error={errors?.imagem !== undefined}
                            helperText={errors?.imagem?.message}
                        />
                    );
                }}
            />
        </FormularioCampos>
    );
}
