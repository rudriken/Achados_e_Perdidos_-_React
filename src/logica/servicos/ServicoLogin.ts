import { ServicoApi } from "./ServicoApi";
import { LocalStorage } from "./ServicoArmazenamento";
import {
    LocalUsuarioInterface,
    LoginRespostaInterface,
    ObjetoInterface,
} from "../interfaces/interfaces";

export const ServicoLogin = {
    entrar: async (credenciais: LoginRespostaInterface): Promise<boolean> => {
        try {
            const login = (
                await ServicoApi.post<LoginRespostaInterface>("api/auth/login", credenciais)
            ).data;
            LocalStorage.gravar("token", login.access);
            LocalStorage.gravar("refresh", login.refresh);
            ServicoApi.defaults.headers.common.Authorization = "Bearer " + login.access;
            return true;
        } catch (erro) {
            return false;
        }
    },
    sair: (): void => {
        ServicoApi.post("api/auth/logout", { refresh: LocalStorage.pegar("refresh", "") });
        LocalStorage.apagar("token");
        LocalStorage.apagar("refresh");
    },
    informacoesDoLocalUsuario: async (): Promise<LocalUsuarioInterface | false> => {
        const token = LocalStorage.pegar("token", "");
        if (token) {
            ServicoApi.defaults.headers.common.Authorization = "Bearer " + token;
            const localUsuario: LocalUsuarioInterface | undefined = (
                await ServicoApi.get<LocalUsuarioInterface>("api/locais")
            ).data;
            if (localUsuario) {
                return localUsuario;
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    informacoesDosObjetos: async (): Promise<
        "objetos_vazio" | ObjetoInterface[] | undefined
    > => {
        const token = LocalStorage.pegar("token", "");
        if (token) {
            ServicoApi.defaults.headers.common.Authorization = "Bearer " + token;
            const objetos = (await ServicoApi.get<ObjetoInterface[]>("api/objetos")).data;
            if (objetos.length === 0) {
                return "objetos_vazio";
            }
            return objetos;
        }
    },
};
