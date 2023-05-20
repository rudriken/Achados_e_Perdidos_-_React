import { useFormContext } from "react-hook-form";
import { FormularioCampos } from "../Formularios.style";
import CampoDeTexto from "../../CampoDeTexto/CampoDeTexto";
import { FrontEndLocalInterface } from "@/logica/interfaces/FrontEndInterfaces";

export default function FormularioIndex() {
    const {
        register,
        formState: { errors },
    } = useFormContext<FrontEndLocalInterface>();

    return (
        <FormularioCampos>
            <CampoDeTexto
                {...register("nome")}
                placeholder={"Digite o nome do local"}
                style={{ width: "550px" }}
                error={errors?.nome !== undefined}
                helperText={errors?.nome?.message}
            />
        </FormularioCampos>
    );
}