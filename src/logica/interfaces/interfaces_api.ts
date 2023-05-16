export interface Resposta_API {
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
    links: Links_API[];
}

interface Links_API {
    type: string;
    rel: string;
    uri: string;
}
