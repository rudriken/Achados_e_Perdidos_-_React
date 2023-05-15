import { FormularioConteiner } from "./Formularios.style";
import Formulario_Local from "./Formularios/Formulario_Local";

interface FormulariosProps {}

export default function Formularios({}: FormulariosProps) {
    return (
        <FormularioConteiner>
            <Formulario_Local />
        </FormularioConteiner>
    );
}
