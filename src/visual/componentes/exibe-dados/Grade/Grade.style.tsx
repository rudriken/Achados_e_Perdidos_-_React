import { styled } from "@mui/material";

export const GradeConteiner = styled("div")`
    display: grid;
    grid-template-columns: 432px 400px;
    grid-template-rows: 120px 30px 30px 120px;
    grid-template-areas:
        "imagem titulo"
        "imagem linha1"
        "imagem linha2"
        "imagem botao";
    column-gap: ${({ theme }) => theme.spacing(8)};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    max-width: 896px;
    margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const GradeImagem = styled("div")`
    grid-area: imagem;
    height: 300px;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: #f5f2f2;
`;

export const GradeTitulo = styled("div")`
    grid-area: titulo;
    align-self: flex-end;
    font-weight: bold;
    font-size: 18px;
`;

export const GradeLinha1 = styled("div")`
    grid-area: linha1;
    align-self: flex-end;
`;

export const GradeLinha2 = styled("div")`
    grid-area: linha2;
    align-self: flex-start;
`;

export const GradeBotao = styled("div")`
    grid-area: botao;
    align-self: flex-start;
`;
