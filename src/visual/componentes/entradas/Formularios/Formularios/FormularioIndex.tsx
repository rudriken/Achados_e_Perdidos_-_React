import { useFormContext } from "react-hook-form";
import { FormularioCampos } from "../Formularios.style";
import CampoDeTexto from "../../CampoDeTexto/CampoDeTexto";
import { LocalInterface } from "@/logica/interfaces/interfaces";
import { useEffect } from "react";

interface FormularioIndexProps {
    textoMudou?: (texto: string) => void;
}

export function FormularioIndex({ textoMudou }: FormularioIndexProps) {
    const {
        register,
        formState: { errors },
        watch,
    } = useFormContext<LocalInterface>();

    const nome = watch("nome");

    useEffect(() => {
        textoMudou?.(nome);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nome]);

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
