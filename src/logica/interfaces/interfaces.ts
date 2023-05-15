export interface LocalUsuario_Interface extends Local_Interface {
    usuario: Usuario_Interface;
}

export interface Local_Interface {
    nome: string;
    endereco: string;
    contato: string;
    descricao: string;
    imagem_local: string;
}

export interface Usuario_Interface {
    nome: string;
    email: string;
    password: string;
    password_confirmation: string;
}
