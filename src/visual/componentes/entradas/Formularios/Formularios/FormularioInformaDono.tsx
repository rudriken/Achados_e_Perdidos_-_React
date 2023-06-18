import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import ServicoFormatador from "@/logica/servicos/ServicoFormatador";
import { FormularioCampos } from "../Formularios.style";
import { CampoDeTexto } from "../../CampoDeTexto/CampoDeTexto.style";
import { ObjetoInterface } from "@/logica/interfaces/interfaces";

interface FormularioInformaDonoProps {
    qualquerCampoAlterado: (valorAlterado: boolean) => void;
    erroDeCampo: (erroDeCampo: boolean) => void;
}

export default function FormularioInformaDono({
    qualquerCampoAlterado,
    erroDeCampo,
}: FormularioInformaDonoProps) {
    const {
        control,
        formState: { errors },
        watch,
    } = useFormContext<ObjetoInterface>();

    const donoNomeAlterado = watch("dono_nome") !== "";
    const donoCpfAlterado = watch("dono_cpf")?.length === 11;
    const erroDeCampoDonoNome = errors.dono_nome !== undefined;
    const erroDeCampoDonoCpf = errors.dono_cpf !== undefined;

    useEffect(() => {
        if (donoNomeAlterado && donoCpfAlterado) {
            qualquerCampoAlterado(true);
        } else {
            qualquerCampoAlterado(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [donoNomeAlterado, donoCpfAlterado]);

    useEffect(() => {
        erroDeCampo(erroDeCampoDonoNome || erroDeCampoDonoCpf);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [erroDeCampoDonoNome, erroDeCampoDonoCpf]);

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
                            onChange={(elemento) => field.onChange(elemento.target.value)}
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
                            onChange={(elemento) => {
                                elemento.target.value = ServicoFormatador.pegarSomenteNumero(
                                    elemento.target.value
                                );
                                if (elemento.target.value.length <= 11) {
                                    field.onChange(elemento.target.value);
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
