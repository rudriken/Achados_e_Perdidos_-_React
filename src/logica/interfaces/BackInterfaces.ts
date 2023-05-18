export interface ApiRespostaInterface {
    id: number;
    nome: string;
    endereco: string;
    contato: string;
    descricao: string | null;
    imagem: string;
    usuario: {
        id: number;
        nome: string;
        email: string;
    };
    links: ApiLinksInterface[];
}

interface ApiLinksInterface {
    type: string;
    rel: string;
    uri: string;
}
