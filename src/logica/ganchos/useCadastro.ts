import { useForm } from "react-hook-form";
import { LocalUsuario_Interface } from "../interfaces/interfaces_internas";

export default function useCadastro() {
    const formularioCadastro = useForm<LocalUsuario_Interface>();
}
