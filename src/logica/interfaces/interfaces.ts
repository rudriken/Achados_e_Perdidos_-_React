export interface LocalUsuarioInterface {
    id: number;
    nome: string;
    endereco: string;
    contato: string;
    descricao: string | null;
    imagem: string;
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

export interface UsuarioInterface {
    id: number;
    nome: string;
    email: string;
    password?: string;
    password_confirmation?: string;
}

export interface LinksInterface {
    type: string;
    rel: string;
    uri: string;
}

export interface LoginRequisicaoInterface {
    email: string;
    password: string;
}

export interface LoginRespostaInterface {
    access: string;
    refresh: string;
}

export interface ObjetoInterface {
    id: number;
    nome: string;
    descricao: string;
    entregue: boolean;
    data_cadastro: string;
    imagem: string;
    links: LinksInterface[];
}

export interface ObjetoDadosInterface {
    nome: string;
    descricao: string;
    acoes: JSX.Element;
}
