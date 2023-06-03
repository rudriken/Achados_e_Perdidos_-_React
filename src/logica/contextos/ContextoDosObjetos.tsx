import { createContext, PropsWithChildren } from "react";
import {
    RedutorDosObjetosInterface,
    estadoInicial,
    useRedutorDosObjetos,
} from "../redutores/RedutorDosObjetos";

const valorInicial: RedutorDosObjetosInterface = {
    estadoDosObjetos: estadoInicial,
    despachoDosObjetos: () => {},
};

export const ContextoDosObjetos = createContext(valorInicial);

export function ProvedorDosObjetos({ children }: PropsWithChildren) {
    const redutor = useRedutorDosObjetos();
    return (
        <ContextoDosObjetos.Provider value={redutor}>{children}</ContextoDosObjetos.Provider>
    );
}
