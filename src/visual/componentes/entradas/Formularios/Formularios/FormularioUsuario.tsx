import { Controller, useFormContext } from "react-hook-form";
import { FormularioCampos } from "../Formularios.style";
import { CampoDeTexto } from "../../CampoDeTexto/CampoDeTexto.style";
import { FrontEndLocalUsuarioInterface } from "@/logica/interfaces/FrontEndInterfaces";

export default function FormularioUsuario() {
    const {
        control,
        formState: { errors },
    } = useFormContext<FrontEndLocalUsuarioInterface>();

    return (
        <FormularioCampos>
            <Controller
                control={control}
                name={"usuario.nome"}
                defaultValue={""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(valor) => field.onChange(valor.target.value)}
                            label={"Nome"}
                            placeholder={"Digite o seu nome completo"}
                            required
                            error={errors?.usuario?.nome !== undefined}
                            helperText={errors?.usuario?.nome?.message}
                            style={{ marginBottom: 16 }}
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
                            onChange={(valor) => field.onChange(valor.target.value)}
                            label={"E-mail"}
                            placeholder={"Digite o seu e-mail"}
                            type={"email"}
                            required
                            error={errors?.usuario?.email !== undefined}
                            helperText={errors?.usuario?.email?.message}
                            style={{ marginBottom: 16 }}
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
                            onChange={(valor) => field.onChange(valor.target.value)}
                            label={"Senha"}
                            placeholder={"Digite a sua senha"}
                            required
                            type={"password"}
                            error={errors?.usuario?.password !== undefined}
                            helperText={errors?.usuario?.password?.message}
                            style={{ marginBottom: 16 }}
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
                            onChange={(valor) => field.onChange(valor.target.value)}
                            label={"Confirme sua senha"}
                            placeholder={"Confirme sua senha"}
                            required
                            type={"password"}
                            error={errors?.usuario?.password_confirmation !== undefined}
                            helperText={errors?.usuario?.password_confirmation?.message}
                        />
                    );
                }}
            />
        </FormularioCampos>
    );
}
