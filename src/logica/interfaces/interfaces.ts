export interface LocalUsuarioInterface {
    id: number;
    nome: string;
    endereco: string;
    contato: string;
    descricao: string | null;
    imagem_local: string;
    usuario: UsuarioInterface;
    links: LinksInterface[];
}

export interface LocalInterface extends Omit<LocalUsuarioInterface, "usuario"> {
    /* esta interface possui a estrutura: */
    // id: number;
    // nome: string;
    // endereco: string;
    // contato: string;
    // descricao: string | null;
    // imagem: string;
    // links: LinksInterface[];
}

interface UsuarioInterface {
    id: number;
    nome: string;
    email: string;
}

interface LinksInterface {
    type: string;
    rel: string;
    uri: string;
}

export interface LoginInterface {
    access: string;
    refresh: string;
}
