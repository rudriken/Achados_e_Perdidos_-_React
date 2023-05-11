export interface Cadastro {
    nome: T;
    endereco: T;
    contato: T;
    descricao: T;
    imagem_local: T;
    usuario_nome: T;
    usuario_email: T;
    usuario_password: T;
    usuario_password_confirmation: T;
}

interface T {
    value: string;
}
