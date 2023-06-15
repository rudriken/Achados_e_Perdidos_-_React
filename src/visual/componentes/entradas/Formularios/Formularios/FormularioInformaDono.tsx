import { useFormContext, Controller } from "react-hook-form";
import { FormularioCampos } from "../Formularios.style";
import { CampoDeTexto } from "../../CampoDeTexto/CampoDeTexto.style";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";
import ServicoFormatador from "@/logica/servicos/ServicoFormatador";

export default function FormularioInformaDono() {
    const {
        control,
        formState: { errors },
    } = useFormContext<ObjetoInterface>();

    return (
        <FormularioCampos>
            <Controller
                control={control}
                name={"dono_nome"}
                defaultValue={""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(valor) => field.onChange(valor.target.value)}
                            label={"Nome"}
                            placeholder={"Digite o nome completo"}
                            required
                            error={errors?.dono_nome !== undefined}
                            helperText={errors?.dono_nome?.message}
                            style={{ marginBottom: 20 }}
                        />
                    );
                }}
            />
            <Controller
                control={control}
                name={"dono_cpf"}
                defaultValue={""}
                render={({ field }) => {
                    return (
                        <CampoDeTexto
                            value={field.value}
                            onChange={(valor) => {
                                valor.target.value = ServicoFormatador.pegarSomenteNumero(
                                    valor.target.value
                                );
                                if (valor.target.value.length <= 11) {
                                    field.onChange(valor.target.value);
                                }
                            }}
                            label={"CPF"}
                            placeholder={"Digite o CPF"}
                            required
                            error={errors?.dono_cpf !== undefined}
                            helperText={errors?.dono_cpf?.message}
                        />
                    );
                }}
            />
        </FormularioCampos>
    );
}
