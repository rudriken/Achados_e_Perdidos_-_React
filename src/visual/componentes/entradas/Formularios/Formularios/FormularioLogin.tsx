import { useFormContext } from "react-hook-form";
import CampoDeTexto from "../../CampoDeTexto/CampoDeTexto";
import { FormularioCampos } from "../Formularios.style";
import { UsuarioInterface } from "@/logica/interfaces/FrontInterfaces";

export default function FormularioLogin() {
    const {
        register,
        formState: { errors },
    } = useFormContext<UsuarioInterface>();

    return (
        <FormularioCampos>
            <CampoDeTexto
                {...register("email")}
                label={"E-mail"}
                placeholder={"Digite o seu e-mail"}
                type={"email"}
                error={errors?.email !== undefined}
                helperText={errors?.email?.message}
                style={{ marginBottom: errors?.email ? 15 : 38 }}
            />
            <CampoDeTexto
                {...register("password")}
                label={"Senha"}
                placeholder={"Digite a sua senha"}
                type={"password"}
                error={errors?.password !== undefined}
                helperText={errors?.password?.message}
                style={{ marginBottom: errors?.password ? 0 : 23 }}
            />
        </FormularioCampos>
    );
}
