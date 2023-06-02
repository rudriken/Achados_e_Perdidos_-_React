import { PropsWithChildren } from "react";
import { ProvedorDoLocalUsuario } from "./ContextoDoLocalUsuario";

export function ProvedorPrincipal({ children }: PropsWithChildren) {
    return <ProvedorDoLocalUsuario>{children}</ProvedorDoLocalUsuario>;
}
