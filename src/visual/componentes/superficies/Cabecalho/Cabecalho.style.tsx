import { styled } from "@mui/material";

export const CabecalhoConteiner = styled("div")`
    display: grid;
    grid-template-columns: 200px 300px 300px 1fr;
    grid-template-areas: "imagem link1 link2 botao";
    padding: ${({ theme }) => theme.spacing(4)};
	max-width: 1000px;
`;

export const CabecalhoLogo = styled("img")`
    grid-area: imagem;
`;

export const CabecalhoLink1 = styled("div")`
    grid-area: link1;
`;

export const CabecalhoLink2 = styled("div")`
    grid-area: link2;
`;

export const CabecalhoBotao = styled("div")`
    grid-area: botao;
    display: flex;
    flex-direction: row-reverse;
`;
