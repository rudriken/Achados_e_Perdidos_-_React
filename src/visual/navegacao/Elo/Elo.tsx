import { Elo as Link } from "./Elo.style";

interface EloProps {
    rotulo: string;
    url?: string;
}

export default function Elo({ rotulo, url }: EloProps) {
    return (
        <>
            <Link href={url}>{rotulo}</Link>
        </>
    );
}
