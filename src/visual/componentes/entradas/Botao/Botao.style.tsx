import { styled, Button } from "@mui/material";

export const BotaoEstilizado = styled(Button)`
    height: 50px;
    border-radius: 3px;
    text-transform: none;
    font-size: 20px;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    padding: ${({ theme }) => theme.spacing(3) + " " + theme.spacing(7)};
`;
