export interface FrontEndLocalUsuarioInterface extends FrontEndLocalInterface {
    usuario: FrontEndUsuarioInterface;
}

export interface FrontEndLocalInterface {
    nome: string;
    endereco: string;
    contato: string;
    descricao: string;
    imagem_local: string;
}

export interface FrontEndUsuarioInterface {
    nome: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface FrontEndLoginInterface
    extends Omit<Omit<FrontEndUsuarioInterface, "nome">, "password_confirmation"> {
    /* esta interface tem essa estrutura: */
    // email: string;
    // password: string;
}
