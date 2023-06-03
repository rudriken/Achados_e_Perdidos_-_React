import React from "react";
import {
    TConteiner,
    TTabela,
    TCabecalho,
    TCorpo,
    TLinha,
    TCelula,
    TPaginacao,
} from "./Tabela.style";

interface TabelaProps<T> {
    cabecalho: string[];
    dados: T[];
    renderizarLinha: (item: T, indice: number) => React.ReactNode;
}

function Tabela<T>({ cabecalho, dados, renderizarLinha }: TabelaProps<T>): JSX.Element {
    return (
        <TConteiner>
            <TTabela width={"100%"}>
                <TCabecalho>
                    <TLinha>
                        {dados.length > 0 &&
                            cabecalho.map((item) => {
                                return (
                                    <TCelula key={item} height={40}>
                                        {item}
                                    </TCelula>
                                );
                            })}
                    </TLinha>
                </TCabecalho>
                <TCorpo>{dados.map(renderizarLinha)}</TCorpo>
            </TTabela>
        </TConteiner>
    );
}

export default Tabela;

export const T_Linha = TLinha;
export const T_Celula = TCelula;
export const T_Paginacao = TPaginacao;
