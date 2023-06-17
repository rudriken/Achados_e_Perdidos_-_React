import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CampoDeTexto } from "../../CampoDeTexto/CampoDeTexto.style";
import CampoDeArquivo from "../../CampoDeArquivo/CampoDeArquivo";
import { FormularioCampos } from "../Formularios.style";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";
import ServicoFormatador from "@/logica/servicos/ServicoFormatador";

interface FormularioObjetoProps {
    imagemFileObjeto: (imagem: File) => void;
    novoCadastro?: boolean;
    objeto?: ObjetoInterface;
    qualquerCampoAlterado: (valorAlterado: boolean) => void;
}

export function FormularioObjeto({
    imagemFileObjeto,
    novoCadastro = false,
    objeto,
    qualquerCampoAlterado,
}: FormularioObjetoProps) {
    const {
        control,
        formState: { errors },
        watch,
    } = useFormContext<ObjetoInterface>();
    const [imagemFile, alterarImagemFile] = useState({} as File);
    const nomeAlterado = watch("nome") !== (objeto?.nome || "");
    const descricaoAlterada = watch("descricao") !== (objeto?.descricao || "");
    const imagemAlterada =
        watch("imagem") !==
        (ServicoFormatador.caminhoRelativoDaImagem(objeto?.imagem || "", "objeto") || "");

    useEffect(() => {
        imagemFileObjeto(imagemFile);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imagemFile]);

    useEffect(() => {
        if (
            (novoCadastro && nomeAlterado && descricaoAlterada && imagemAlterada) ||
            (!novoCadastro && (nomeAlterado || descricaoAlterada || imagemAlterada))
        ) {
            qualquerCampoAlterado(true);
        } else {
            qualquerCampoAlterado(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nomeAlterado, descricaoAlterada, imagemAlterada]);

    return (
        <FormularioCampos>
            <Controller
                control={control}
                name={"nome"}
                defaultValue={!novoCadastro ? objeto?.nome : ""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(elemento) => field.onChange(elemento.target.value)}
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
                defaultValue={!novoCadastro ? objeto?.descricao : ""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(elemento) => field.onChange(elemento.target.value)}
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
                defaultValue={
                    !novoCadastro
                        ? ServicoFormatador.caminhoRelativoDaImagem(
                              objeto?.imagem || "",
                              "objeto"
                          )
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
