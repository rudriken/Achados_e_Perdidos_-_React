import { styled, TextField } from "@mui/material";

export const CampoDeTexto = styled(TextField)`
    .MuiInputBase-input {
        color: ${({ theme }) => theme.palette.text.primary};
    }
`;
