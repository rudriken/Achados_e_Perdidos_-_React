import { PropsWithChildren } from "react";
import { ProvedorDoLocalUsuario } from "./ContextoDoLocalUsuario";
import { ProvedorDosObjetos } from "./ContextoDosObjetos";

export function ProvedorPrincipal({ children }: PropsWithChildren) {
    return (
        <ProvedorDoLocalUsuario>
            <ProvedorDosObjetos>{children}</ProvedorDosObjetos>
        </ProvedorDoLocalUsuario>
    );
}
