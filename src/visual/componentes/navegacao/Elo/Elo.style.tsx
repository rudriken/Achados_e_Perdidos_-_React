import { styled, Link } from "@mui/material";

export const Elo = styled(Link)`
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 50px;
    font-size: 18px;
`;
