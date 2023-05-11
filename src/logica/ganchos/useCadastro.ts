import { FormEvent } from "react";
import { Cadastro } from "../interfaces/cadastro";

export default function useCadastro(evento: FormEvent<HTMLFormElement & Cadastro>) {
    evento.preventDefault();
    const alvo = evento.currentTarget;
    const local_nome = alvo.nome.value;
    const endereco = alvo.endereco.value;
    const contato = alvo.contato.value;
    const descricao = alvo.descricao.value;
    const imagem_local = alvo.imagem_local.value;
    const usuario_nome = alvo.usuario_nome.value;
    const usuario_email = alvo.usuario_email.value;
    const usuario_password = alvo.usuario_password.value;
    const usuario_password_confirmation = alvo.usuario_password_confirmation.value;
	
}
