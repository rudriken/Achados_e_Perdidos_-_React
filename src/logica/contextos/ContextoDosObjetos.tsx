import { createContext, PropsWithChildren } from "react";
import {
    RedutorDosObjetos,
    estadoInicial,
    useRedutorDosObjetos,
} from "../redutores/RedutorObjetos";

const valorInicial: RedutorDosObjetos = {
    estadoDosObjetos: estadoInicial,
    despachoDosObjetos: () => {},
};

export const ContextoDosObjetos = createContext(valorInicial);

export function ProvedorDosObjetos({ children }: PropsWithChildren) {
    const redutor = useRedutorDosObjetos();
    console.log(redutor);
    return (
        <ContextoDosObjetos.Provider value={redutor}>{children}</ContextoDosObjetos.Provider>
    );
}
