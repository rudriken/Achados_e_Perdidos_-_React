import { ServicoApi } from "./ServicoApi";
import { LocalStorage } from "./ServicoArmazenamento";
import {
    LocalUsuarioInterface,
    LoginInterface,
    ObjetoInterface,
} from "../interfaces/interfaces";

export const ServicoLogin = {
    entrar: async (credenciais: LoginInterface): Promise<boolean> => {
        try {
            const login = (
                await ServicoApi.post<LoginInterface>("api/auth/login", credenciais)
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
    informacoesLocalUsuario: async (): Promise<LocalUsuarioInterface | undefined> => {
        const token = LocalStorage.pegar("token", "");
        if (token) {
            ServicoApi.defaults.headers.common.Authorization = "Bearer " + token;
            const localUsuario: LocalUsuarioInterface | undefined = (
                await ServicoApi.get<LocalUsuarioInterface>("api/locais")
            ).data;
            // ServicoApi.defaults.headers.common.Authorization = "Bearer " + token;
            return localUsuario;
        }
    },
    informacoesObjetos: async () => {
        const token = LocalStorage.pegar("token", "");
        if (token) {
            ServicoApi.defaults.headers.common.Authorization = "Bearer " + token;
            const objetos = (await ServicoApi.get<ObjetoInterface[]>("api/objetos")).data;
            return objetos;
        }
    },
};
