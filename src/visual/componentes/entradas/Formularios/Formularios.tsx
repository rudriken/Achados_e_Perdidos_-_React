import { FormularioConteiner } from "./Formularios.style";
import FormularioLocal from "./Formularios/FormularioLocal";

interface FormulariosProps {}

export default function Formularios({}: FormulariosProps) {
    return (
        <FormularioConteiner>
            <FormularioLocal />
        </FormularioConteiner>
    );
}
