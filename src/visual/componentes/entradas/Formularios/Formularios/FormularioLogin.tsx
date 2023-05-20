import { useFormContext } from "react-hook-form";
import { FormularioCampos } from "../Formularios.style";
import CampoDeTexto from "../../CampoDeTexto/CampoDeTexto";
import { FrontEndLoginInterface } from "@/logica/interfaces/FrontEndInterfaces";

export default function FormularioLogin() {
    const {
        register,
        formState: { errors },
    } = useFormContext<FrontEndLoginInterface>();

    return (
        <FormularioCampos>
            <CampoDeTexto
                {...register("email")}
                label={"E-mail"}
                placeholder={"Digite o seu e-mail"}
                type={"email"}
                error={errors?.email !== undefined}
                helperText={errors?.email?.message}
                style={{ marginBottom: 24 }}
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
