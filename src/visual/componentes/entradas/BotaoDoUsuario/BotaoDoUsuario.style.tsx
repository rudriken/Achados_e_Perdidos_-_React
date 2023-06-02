import { Button, Grid, styled } from "@mui/material";

export const BotaoDoUsuarioMenu = styled(Button)`
    /* padding: 0; */
    .MuiGrid-container {
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 2px 40px;
        grid-template-areas: "nome barra icone";
    }
`;

export const GridDoUsuarioConteiner = styled(Grid)``;

export const GridDoUsuarioNome = styled(Grid)`
    grid-area: nome;
`;

export const GridDoUsuarioBarra = styled(Grid)`
    grid-area: barra;
    transform: scaleY(3.3) translateY(-1.25px);
`;

export const GridDoUsuarioIcone = styled(Grid)`
    grid-area: icone;
`;
