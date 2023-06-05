import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CampoDeTexto } from "../../CampoDeTexto/CampoDeTexto.style";
import CampoDeArquivo from "../../CampoDeArquivo/CampoDeArquivo";
import { FormularioCampos } from "../Formularios.style";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";

export function FormularioObjeto({ imagemFileObjeto = (imagem: File) => {} }) {
    const {
        control,
        formState: { errors },
    } = useFormContext<ObjetoInterface>();
    const [imagemFile, alterarImagemFile] = useState({} as File);

    useEffect(() => {
        imagemFileObjeto(imagemFile);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imagemFile]);

    return (
        <FormularioCampos>
            <Controller
                control={control}
                name={"nome"}
                defaultValue={""}
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
                            onChange={(valor) => field.onChange(valor.target.value)}
                            label={"Descrição"}
                            placeholder={"Digite a descrição do objeto"}
                            required
                            error={errors?.descricao !== undefined}
                            helperText={errors?.descricao?.message}
                            style={{ marginBottom: 16 }}
                        />
                    );
                }}
            />
            <Controller
                control={control}
                name={"imagem"}
                defaultValue={""}
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
                        />
                    );
                }}
            />
        </FormularioCampos>
    );
}
