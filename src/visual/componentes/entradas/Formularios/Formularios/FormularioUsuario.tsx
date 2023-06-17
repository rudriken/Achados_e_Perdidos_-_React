import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormularioCampos } from "../Formularios.style";
import { CampoDeTexto } from "../../CampoDeTexto/CampoDeTexto.style";
import { LocalUsuarioInterface, UsuarioInterface } from "@/logica/interfaces/interfaces";

interface FormularioUsuarioProps {
    usuario?: UsuarioInterface;
    qualquerCampoAlterado: (valorAlterado: boolean) => void;
    alteracao?: boolean;
}

export function FormularioUsuario({
    usuario,
    qualquerCampoAlterado,
    alteracao = false,
}: FormularioUsuarioProps) {
    const {
        control,
        formState: { errors },
        watch,
    } = useFormContext<LocalUsuarioInterface>();
    const nomeAlterado = watch("usuario.nome") !== usuario?.nome;
    const emailAlterado = watch("usuario.email") !== usuario?.email;
    const passwordAlterado = Boolean(watch("usuario.password"));
    const password_confirmationAlterado = Boolean(watch("usuario.password_confirmation"));

    useEffect(() => {
        if (
            nomeAlterado ||
            emailAlterado ||
            passwordAlterado ||
            password_confirmationAlterado
        ) {
            qualquerCampoAlterado(true);
        } else {
            qualquerCampoAlterado(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nomeAlterado, emailAlterado, passwordAlterado, password_confirmationAlterado]);

    return (
        <FormularioCampos>
            <Controller
                control={control}
                name={"usuario.nome"}
                defaultValue={usuario ? usuario.nome : ""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(elemento) => field.onChange(elemento.target.value)}
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
                defaultValue={usuario ? usuario.email : ""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(elemento) => field.onChange(elemento.target.value)}
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
                            onChange={(elemento) => field.onChange(elemento.target.value)}
                            label={"Senha"}
                            placeholder={"Digite a sua senha"}
                            required={!alteracao}
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
                            onChange={(elemento) => field.onChange(elemento.target.value)}
                            label={"Confirme sua senha"}
                            placeholder={"Confirme sua senha"}
                            required={!alteracao || passwordAlterado}
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
