import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CampoDeTexto } from "../../CampoDeTexto/CampoDeTexto.style";
import CampoDeArquivo from "../../CampoDeArquivo/CampoDeArquivo";
import { FormularioCampos } from "../Formularios.style";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";
import ServicoFormatador from "@/logica/servicos/ServicoFormatador";

export function FormularioObjeto({
    imagemFileObjeto = (imagem: File) => {
        imagem;
    },
    novoCadastro = false,
    alteracao = false,
    objeto = {
        nome: "",
        descricao: "",
        imagem: "",
    } as ObjetoInterface,
    qualquerCampoAlterado = (valorAlterado: boolean) => {
        valorAlterado;
    },
}) {
    const {
        control,
        formState: { errors },
        watch,
    } = useFormContext<ObjetoInterface>();
    const [imagemFile, alterarImagemFile] = useState({} as File);
    const nomealterado = watch("nome") !== objeto.nome;
    const descricaoAlterada = watch("descricao") !== objeto.descricao;
    const imagemLAterada = watch("imagem") !== ServicoFormatador.retirarPublic(objeto.imagem);

    useEffect(() => {
        imagemFileObjeto(imagemFile);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imagemFile]);

    useEffect(() => {
        if (nomealterado || descricaoAlterada || imagemLAterada) {
            qualquerCampoAlterado(true);
        } else {
            qualquerCampoAlterado(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nomealterado, descricaoAlterada, imagemLAterada]);

    return (
        <FormularioCampos>
            <Controller
                control={control}
                name={"nome"}
                defaultValue={alteracao ? objeto.nome : ""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(valor) => field.onChange(valor.target.value)}
                            label={"Nome"}
                            placeholder={"Digite o nome do objeto"}
                            required
                            error={errors?.nome !== undefined}
                            helperText={errors?.nome?.message}
                            style={{ marginBottom: 16 }}
                            disabled={!novoCadastro && !alteracao}
                        />
                    );
                }}
            />
            <Controller
                control={control}
                name={"descricao"}
                defaultValue={alteracao ? objeto.descricao : ""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(valor) => field.onChange(valor.target.value)}
                            label={"Descrição"}
                            placeholder={"Digite a descrição do objeto"}
                            required
                            error={errors?.descricao !== undefined}
                            helperText={errors?.descricao?.message}
                            style={{ marginBottom: 16 }}
                            disabled={!novoCadastro && !alteracao}
                        />
                    );
                }}
            />
            <Controller
                control={control}
                name={"imagem"}
                defaultValue={alteracao ? ServicoFormatador.retirarPublic(objeto.imagem) : ""}
                render={({ field }) => {
                    return (
                        <CampoDeArquivo
                            value={field.value}
                            onChange={(valor) => {
                                alterarImagemFile(valor[0]);
                                field.onChange(valor.item(0)?.name);
                            }}
                            label={"Imagem do objeto"}
                            placeholder={"Selecione a imagem do objeto"}
                            required
                            error={errors?.imagem !== undefined}
                            helperText={errors?.imagem?.message}
                            disabled={!novoCadastro && !alteracao}
                        />
                    );
                }}
            />
        </FormularioCampos>
    );
}
