import { useFormContext } from "react-hook-form";
import { FormularioCampos } from "../Formularios.style";
import CampoDeTexto from "../../CampoDeTexto/CampoDeTexto";
import { LocalInterface } from "@/logica/interfaces/interfaces";

export default function FormularioIndex() {
    const {
        register,
        formState: { errors },
    } = useFormContext<LocalInterface>();

    return (
        <FormularioCampos>
            <CampoDeTexto
                {...register("nome")}
                placeholder={"Digite o nome do local"}
                style={{ width: "550px" }}
                required
                error={errors?.nome !== undefined}
                helperText={errors?.nome?.message}
            />
        </FormularioCampos>
    );
}
