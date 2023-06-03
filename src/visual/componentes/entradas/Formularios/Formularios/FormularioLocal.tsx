import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ServicoContagemCaracteres } from "@/logica/servicos/ServicoContagemCaracteres";
import { FormularioCampos } from "../Formularios.style";
import CampoDeTexto from "../../CampoDeTexto/CampoDeTexto";
import CampoDeArquivo from "../../CampoDeArquivo/CampoDeArquivo";
import { LocalInterface } from "@/logica/interfaces/interfaces";

export function FormularioLocal() {
    const {
        control,
        formState: { errors },
    } = useFormContext<LocalInterface>();
    const [caracteresDescricao, alterarCaracteresDescricao] = useState(0);
    const caracteresDescricaoMaximo = 255;

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
                defaultValue={""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(valor) => field.onChange(valor.target.value)}
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
                defaultValue={""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(valor) => field.onChange(valor.target.value)}
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
                defaultValue={""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(valor) => {
                                if (valor.target.value.length <= caracteresDescricaoMaximo) {
                                    alterarCaracteresDescricao(
                                        ServicoContagemCaracteres.contar(valor)
                                    );
                                    field.onChange(valor.target.value);
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
                defaultValue={""}
                render={({ field }) => {
                    return (
                        <CampoDeArquivo
                            value={field.value}
                            onChange={(valor) => field.onChange(valor.item(0)?.name)}
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
