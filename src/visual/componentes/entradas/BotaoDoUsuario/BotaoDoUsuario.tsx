import {
    BotaoDoUsuarioMenu,
    GridDoUsuarioConteiner,
    GridDoUsuarioNome,
    GridDoUsuarioBarra,
    GridDoUsuarioIcone,
} from "./BotaoDoUsuario.style";

interface ExibeUsuarioProps {
    nome: string;
    onClick?: (evento: React.MouseEvent) => void;
}

export default function BotaoDoUsuario({ nome, onClick }: ExibeUsuarioProps) {
    return (
        <BotaoDoUsuarioMenu
            variant={"contained"}
            style={{
                width: 300,
                height: 50,
                textTransform: "capitalize",
                fontSize: 16,
            }}
            onClick={onClick}
        >
            <GridDoUsuarioConteiner container alignItems={"center"}>
                <GridDoUsuarioNome item>{nome}</GridDoUsuarioNome>
                <GridDoUsuarioBarra item color={"black"}>
                    |
                </GridDoUsuarioBarra>
                <GridDoUsuarioIcone item sx={{ width: 50 }} alignContent={"flex-end"}>
                    <i className={"twf-caret-down"} style={{ width: 50, fontSize: 12 }} />
                </GridDoUsuarioIcone>
            </GridDoUsuarioConteiner>
        </BotaoDoUsuarioMenu>
    );
}
