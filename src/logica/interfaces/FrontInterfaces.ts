export interface LocalUsuarioInterface extends LocalInterface {
    usuario: UsuarioInterface;
}

export interface LocalInterface {
    nome: string;
    endereco: string;
    contato: string;
    descricao: string;
    imagem_local: string;
}

export interface UsuarioInterface {
    nome: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface LoginInterface {
    access: string;
    refresh: string;
}
