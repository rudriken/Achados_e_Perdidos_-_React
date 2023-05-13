export interface Cadastro {
    nome: string;
    endereco: string;
    contato: string;
    descricao: string;
    imagem_local: string;
    usuario: Usuario;
}

interface Usuario {
    nome: string;
    email: string;
    password: string;
    password_confirmation: string;
}
