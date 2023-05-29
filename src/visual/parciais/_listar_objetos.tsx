import { Container } from "@mui/material";
import TituloPagina from "../componentes/exibe-dados/TituloPagina/TituloPagina";

export default function Listar_objetos() {
    return (
        <Container>
            <TituloPagina
                titulo={"Lista de Objetos Disponíveis"}
                subtitulo={"Lista dos objetos não entregues ao dono"}
            />
        </Container>
    );
}
