import { useFormContext } from "react-hook-form";
import CampoDeTexto from "../../CampoDeTexto/CampoDeTexto";
import { FormularioCampos } from "../Formularios.style";
import { Usuario_Interface } from "@/logica/interfaces/interfaces_internas";

export default function Formulario_Login() {
    const {
        register,
        formState: { errors },
    } = useFormContext<Usuario_Interface>();

    return (
        <FormularioCampos>
            <CampoDeTexto
                {...register("email")}
                label={"E-mail"}
                placeholder={"Digite o seu e-mail"}
                type={"email"}
                error={errors?.email !== undefined}
                helperText={errors?.email?.message}
                style={{ marginBottom: 16 }}
            />
            <CampoDeTexto
                {...register("password")}
                label={"Senha"}
                placeholder={"Digite a sua senha"}
                type={"password"}
                error={errors?.password !== undefined}
                helperText={errors?.password?.message}
            />
        </FormularioCampos>
    );
}
