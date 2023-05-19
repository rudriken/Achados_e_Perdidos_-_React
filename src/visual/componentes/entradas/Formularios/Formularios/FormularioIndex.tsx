import { useFormContext } from "react-hook-form";
import { FormularioCampos } from "../Formularios.style";
import { CampoDeTexto } from "../../CampoDeTexto/CampoDeTexto.style";
import { FrontLocalInterface } from "@/logica/interfaces/FrontInterfaces";

export default function FormularioIndex() {
    const {
        register,
        formState: { errors },
    } = useFormContext<FrontLocalInterface>();

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
