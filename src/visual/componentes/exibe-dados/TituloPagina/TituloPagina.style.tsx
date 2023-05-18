import { styled } from "@mui/material";

export const TituloPagina_Conteiner = styled("div")`
    justify-items: center;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const TituloPagina_Titulo = styled("h1")``;

export const TituloPagina_Subtitulo = styled("h2")`
    font-size: 16px;
    color: ${({ theme }) => theme.palette.text.secondary};
`;
