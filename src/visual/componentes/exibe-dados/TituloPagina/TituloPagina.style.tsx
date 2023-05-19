import { styled } from "@mui/material";

export const TituloPagina_Conteiner = styled("div")`
    justify-items: center;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing(5)};
    margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const TituloPagina_Titulo = styled("h1")``;

export const TituloPagina_Subtitulo = styled("h2")`
    font-size: 17px;
    font-weight: normal;
`;
