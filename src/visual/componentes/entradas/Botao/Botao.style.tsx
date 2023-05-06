import { styled, Button } from "@mui/material";

export const Botao = styled(Button)`
    height: 50px;
    border-radius: 3px;
    text-transform: none;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    padding: ${({ theme }) => theme.spacing(3) + " " + theme.spacing(7)};
`;
