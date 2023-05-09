import { styled, Link } from "@mui/material";

export const Elo = styled(Link)`
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
	text-decoration: none;
`;
