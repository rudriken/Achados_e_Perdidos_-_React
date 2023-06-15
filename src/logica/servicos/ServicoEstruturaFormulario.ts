import * as yup from "yup";
import { ServicoValidacao } from "./ServicoValidacao";

export const ServicoEstruturaFormulario = {
    cadastro: () => {
        return yup
            .object()
            .shape({
                nome: yup
                    .string()
                    .required("É obrigatório preencher este campo!")
                    .min(3, "Digite um nome maior")
                    .max(255, "Nome com muitos caracteres, inaceitável"),
                endereco: yup
                    .string()
                    .required("É obrigatório preencher este campo!")
                    .min(3, "Digite um endereço maior")
                    .max(255, "Endereço com muitos caracteres, inaceitável"),
                contato: yup
                    .string()
                    .required("É obrigatório preencher este campo!")
                    .min(3, "Digite um contato maior")
                    .max(255, "Contato com muitos caracteres, inaceitável"),
                descricao: yup
                    .string()
                    .max(255, "Sua descrição ultrapassou 255 caracteres permitidos"),
                imagem: yup.string().required(),
                usuario: yup.object().shape({
                    nome: yup
                        .string()
                        .required("É obrigatório preencher este campo!")
                        .min(3, "Nome muito pequeno")
                        .max(255, "Nome com muitos caracteres, inaceitável"),
                    email: yup
                        .string()
                        .required("É obrigatório preencher este campo!")
                        .min(3, "E-mail muito pequeno")
                        .max(255, "E-mail com muitos caracteres, inaceitável")
                        .email("Tem que ser um e-mail válido!"),
                    password: yup.string().required("É obrigatório preencher este campo!"),
                    password_confirmation: yup
                        .string()
                        .required("É obrigatório preencher este campo!")
                        .oneOf([yup.ref("password"), ""], "As senhas não conferem"),
                }),
            })
            .defined();
    },
    buscaLocal: () => {
        return yup
            .object()
            .shape({
                nome: yup
                    .string()
                    .min(3, "Nome muito curto")
                    .required("É obrigatório preencher este campo!"),
            })
            .defined();
    },
    login: () => {
        return yup.object().shape({
            email: yup
                .string()
                .required("É obrigatório preencher este campo!")
                .min(3, "E-mail curto e inválido")
                .max(255, "Email muito grande, inaceitável")
                .email("Tem que ser um e-mail válido!"),
            password: yup.string().required("É obrigatório preencher este campo!"),
        });
    },
    cadastroObjeto: () => {
        return yup.object().shape({
            nome: yup
                .string()
                .required("É obrigatório preencher este campo!")
                .min(3, "Nome muito curto!")
                .max(255, "Nome muito grande, inaceitável"),
            descricao: yup
                .string()
                .required("É obrigatório preencher este campo!")
                .min(3, "Descrição muito curta!")
                .max(255, "Descrição muito longa, inaceitável!"),
            imagem: yup.string().required("É obrigatório definir uma imagem!"),
        });
    },
    informaDono: () => {
        return yup.object().shape({
            dono_nome: yup
                .string()
                .required("É obrigatório preencher este campo!")
                .min(3, "Nome muito curto!")
                .max(255, "Nome muito grande, inaceitável"),
            dono_cpf: yup
                .string()
                .required("É obrigatório preencher este campo!")
                .min(11, "É aceito somente 11 números")
                .max(11, "É aceito somente 11 números")
                .test("validar CPF", "CPF inválido", ServicoValidacao.verificarCPF),
        });
    },
};
