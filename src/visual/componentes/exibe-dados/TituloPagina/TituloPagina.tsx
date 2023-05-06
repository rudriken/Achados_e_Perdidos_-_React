import {
    TituloPagina_Conteiner,
    TituloPagina_Titulo,
    TituloPagina_Subtitulo,
} from "./TituloPagina.style";

interface TituloPaginaProps {
    titulo: string;
    subtitulo?: string;
}

function TituloPagina({ titulo, subtitulo }: TituloPaginaProps): JSX.Element {
    return (
        <TituloPagina_Conteiner>
            <TituloPagina_Titulo>{titulo}</TituloPagina_Titulo>
            <TituloPagina_Subtitulo>{subtitulo}</TituloPagina_Subtitulo>
        </TituloPagina_Conteiner>
    );
}

export default TituloPagina;
