import { Controller, useFormContext } from "react-hook-form";
import { CampoDeTexto } from "../../CampoDeTexto/CampoDeTexto.style";
import { LocalUsuario_Interface } from "@/logica/interfaces/interfaces_internas";
import CampoDeArquivo from "../../CampoDeArquivo/CampoDeArquivo";
import { FormularioCampos } from "../Formularios.style";

export default function Formulario_Local() {
    const {
        control,
        formState: { errors },
    } = useFormContext<LocalUsuario_Interface>();

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
                            onChange={(valor) => field.onChange(valor.target.value)}
                            label={"Descrição"}
                            placeholder={"Digite a descriçao do local"}
                            error={errors?.descricao !== undefined}
                            helperText={errors?.descricao?.message}
                            style={{ marginBottom: 16 }}
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
                            onChange={(valor) => field.onChange(valor.item(0)?.name)}
                            label={"Imagem do local"}
                            placeholder={"Selecione a imagem do local"}
                            required
                            error={errors?.imagem_local !== undefined}
                            helperText={errors?.imagem_local?.message}
                        />
                    );
                }}
            />
        </FormularioCampos>
    );
}
