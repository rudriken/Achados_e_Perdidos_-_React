import { styled } from "@mui/material";

export const CabecalhoConteiner = styled("div")`
    display: grid;
    grid-template-columns: 200px 200px 1fr;
    grid-template-areas: "imagem link botao";
    padding: ${({ theme }) => theme.spacing(4)};
    max-width: 992px;
`;

export const CabecalhoLogo = styled("img")`
    grid-area: imagem;
`;

export const CabecalhoLink = styled("div")`
    grid-area: link;
`;

export const CabecalhoBotao = styled("div")`
    grid-area: botao;
    display: flex;
    flex-direction: row-reverse;
    min-width: 200px;
`;
