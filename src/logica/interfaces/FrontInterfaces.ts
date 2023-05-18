export interface FrontLocalUsuarioInterface extends FrontLocalInterface {
    usuario: FrontUsuarioInterface;
}

export interface FrontLocalInterface {
    nome: string;
    endereco: string;
    contato: string;
    descricao: string;
    imagem_local: string;
}

export interface FrontUsuarioInterface {
    nome: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface FrontLoginInterface
    extends Omit<Omit<FrontUsuarioInterface, "nome">, "password_confirmation"> {
    /* esta interface tem essa estrutura: */
    // email: string;
    // password: string;
}
