import { styled, Dialog, DialogTitle, DialogContent } from "@mui/material";

export const DialogoConteiner = styled(Dialog)``;

export const DialogoTitulo = styled(DialogTitle)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const DialogoSubtitulo = styled("h2")`
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: normal;
    font-size: 20px;
`;

export const DialogoConteudo = styled(DialogContent)``;
