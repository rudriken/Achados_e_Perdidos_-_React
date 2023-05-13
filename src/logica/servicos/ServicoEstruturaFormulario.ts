import * as yup from "yup";

export const ServicoEstruturaFormulario = {
    cadastro: () => {
        return yup
            .object()
            .shape({
                nome: yup
                    .string()
                    .min(3, "Digite um nome maior")
                    .max(255, "Nome com muitos caracteres, inaceitável")
                    .required(),
                endereco: yup
                    .string()
                    .min(3, "Digite um endereço maior")
                    .max(255, "Endereço com muitos caracteres, inaceitável")
                    .required(),
                contato: yup
                    .string()
                    .min(3, "Digite um contato maior")
                    .max(255, "Contato com muitos caracteres, inaceitável")
                    .required(),
                descricao: yup
                    .string()
                    .max(255, "Sua descrição ultrapassou 255 caracteres permitidos"),
                imagem_local: yup.string().min(3, "Nome para imagem inválido").required(),
                usuario: yup.object().shape({
                    nome: yup
                        .string()
                        .min(3, "Nome muito pequeno")
                        .max(255, "Nome com muitos caracteres, inaceitável")
                        .required(),
                    email: yup
                        .string()
                        .min(5, "E-mail muito pequeno")
                        .max(255, "E-mail com muitos caracteres, inaceitável")
                        .required()
                        .email(),
                    password: yup
                        .string()
                        .min(8, "A senha precisa ter pelo menos 8 caracteres")
                        .required(),
                    password_confirmation: yup
                        .string()
                        .min(8, "A senha precisa ter pelo menos 8 caracteres")
                        .required()
                        .oneOf([yup.ref("password"), ""], "As senhas não conferem"),
                }),
            })
            .defined();
    },
    buscaLocal: () => {
        return yup
            .object()
            .shape({
                nome: yup.string().min(3, "Nome muito curto").required(),
            })
            .defined();
    },
    login: () => {
        return yup.object().shape({
            email: yup
                .string()
                .min(3, "E-mail curto e inválido")
                .max(255, "Email muito grande, inaceitável")
                .required()
                .email(),
            password: yup
                .string()
                .min(8, "A senha precisa ter pelo menos 8 caracteres")
                .required(),
        });
    },
};
