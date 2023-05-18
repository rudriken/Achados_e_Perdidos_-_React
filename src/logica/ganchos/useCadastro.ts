import { useForm } from "react-hook-form";
import { LocalUsuarioInterface } from "../interfaces/FrontInterfaces";

export default function useCadastro() {
    const formularioCadastro = useForm<LocalUsuarioInterface>();
}
