import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormularioCampos } from "../Formularios.style";
import { CampoDeTexto } from "../../CampoDeTexto/CampoDeTexto.style";
import { LocalUsuarioInterface, UsuarioInterface } from "@/logica/interfaces/interfaces";

interface FormularioUsuarioProps {
    usuario?: UsuarioInterface;
    qualquerCampoAlterado: (valorAlterado: boolean) => void;
    novoCadastro?: boolean;
    erroDeCampo: (erroDeCampo: boolean) => void;
}

export function FormularioUsuario({
    usuario,
    qualquerCampoAlterado,
    novoCadastro = false,
    erroDeCampo,
}: FormularioUsuarioProps) {
    const {
        control,
        formState: { errors },
        watch,
    } = useFormContext<LocalUsuarioInterface>();
    const nomeAlterado = watch("usuario.nome") !== (usuario?.nome || "");
    const emailAlterado = watch("usuario.email") !== (usuario?.email || "");
    const passwordAlterado = watch("usuario.password") !== "";
    const password_confirmationAlterado = watch("usuario.password_confirmation") !== "";
    const errosDeCamposNoNovoCadastro =
        novoCadastro &&
        (errors.usuario?.nome !== undefined ||
            errors.usuario?.email !== undefined ||
            errors.usuario?.password !== undefined ||
            errors.usuario?.password_confirmation !== undefined);

    const errosDeCamposNaAlteracao =
        !novoCadastro &&
        (errors.usuario?.nome !== undefined ||
            errors.usuario?.email !== undefined ||
            errors.usuario?.password_confirmation !== undefined) &&
        watch("usuario.password") !== watch("usuario.password_confirmation");

    useEffect(() => {
        if (
            (novoCadastro &&
                nomeAlterado &&
                emailAlterado &&
                passwordAlterado &&
                password_confirmationAlterado) ||
            (!novoCadastro &&
                (nomeAlterado ||
                    emailAlterado ||
                    (passwordAlterado && password_confirmationAlterado)))
        ) {
            qualquerCampoAlterado(true);
        } else {
            qualquerCampoAlterado(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nomeAlterado, emailAlterado, passwordAlterado, password_confirmationAlterado]);

    useEffect(() => {
        erroDeCampo(errosDeCamposNoNovoCadastro);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errosDeCamposNoNovoCadastro]);

    useEffect(() => {
        erroDeCampo(errosDeCamposNaAlteracao);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errosDeCamposNaAlteracao]);

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
                            required={novoCadastro}
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
                            required={novoCadastro || passwordAlterado}
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
