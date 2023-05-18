export interface BackLocalUsuarioInterface {
    id: number;
    nome: string;
    endereco: string;
    contato: string;
    descricao: string | null;
    imagem: string;
    usuario: BackUsuarioInterface;
    links: BackLinksInterface[];
}

interface BackUsuarioInterface {
    id: number;
    nome: string;
    email: string;
}

interface BackLinksInterface {
    type: string;
    rel: string;
    uri: string;
}

export interface BackLoginInterface {
    access: string;
    refresh: string;
}
