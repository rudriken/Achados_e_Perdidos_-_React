import { styled, Button } from "@mui/material";

export const BotaoEstilizado = styled(Button)`
    border-radius: 3px;
    text-transform: none;
    font-size: 18px;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    padding: ${({ theme }) => theme.spacing(3) + " " + theme.spacing(7)};
`;
