import { parciais } from "@/logica/tipos/globais";
import { useState } from "react";

export default function usePlataforma() {
    const [parcial, alterarParcial] = useState(parciais[0]);

    return {
        parcial,
        alterarParcial,
    };
}
