import {
    styled,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
} from "@mui/material";

export const TConteiner = styled(TableContainer)``;

export const TTabela = styled(Table)`
    &.MuiTable-root {
        border-collapse: collapse;
        /* border-spacing: 0 ${({ theme }) => theme.spacing(3)}; */
    }
`;

export const TCabecalho = styled(TableHead)`
    .MuiTableCell-root {
        font-weight: bold;
    }
`;

export const TCorpo = styled(TableBody)``;

export const TLinha = styled(TableRow)``;

export const TCelula = styled(TableCell)`
    padding: ${({ theme }) => theme.spacing(0) + " " + theme.spacing(4)};
    border: 1px solid ${({ theme }) => theme.palette.text.secondary};
    &.MuiTableCell-body {
        color: ${({ theme }) => theme.palette.text.secondary};
    }
`;

export const TPaginacao = styled(Pagination)``;
