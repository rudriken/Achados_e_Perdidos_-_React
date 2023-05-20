export interface BackEndLocalUsuarioInterface {
    id: number;
    nome: string;
    endereco: string;
    contato: string;
    descricao: string | null;
    imagem: string;
    usuario: BackEndUsuarioInterface;
    links: BackEndLinksInterface[];
}

interface BackEndUsuarioInterface {
    id: number;
    nome: string;
    email: string;
}

interface BackEndLinksInterface {
    type: string;
    rel: string;
    uri: string;
}

export interface BackEndLoginInterface {
    access: string;
    refresh: string;
}
