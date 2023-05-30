import { PropsWithChildren } from "react";
import { ProvedorDoLocalUsuario } from "./ContextoLocalUsuario";

export function ProvedorPrincipal({ children }: PropsWithChildren) {
    return (
        <>
            <ProvedorDoLocalUsuario>{children}</ProvedorDoLocalUsuario>
        </>
    );
}
