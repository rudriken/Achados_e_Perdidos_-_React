import { ServicoAPI } from "./ServicoApi";
import { LocalStorage } from "./ServicoArmazenamento";
import { FrontEndLoginInterface } from "../interfaces/FrontEndInterfaces";
import {
    BackEndLocalUsuarioInterface,
    BackEndLoginInterface,
} from "../interfaces/BackEndInterfaces";

export const ServicoLogin = {
    entrar: async (credenciais: FrontEndLoginInterface): Promise<boolean> => {
        try {
            const login = (
                await ServicoAPI.post<BackEndLoginInterface>("api/auth/login", credenciais)
            ).data;
            LocalStorage.gravar("token", login.access);
            LocalStorage.gravar("refresh", login.refresh);
            ServicoAPI.defaults.headers.common.Authorization = "Bearer " + login.access;
            return true;
        } catch (erro) {
            return false;
        }
    },
    sair: (): void => {
        ServicoAPI.post("api/auth/logout", { refresh: LocalStorage.pegar("refresh", "") });
        LocalStorage.apagar("token");
        LocalStorage.apagar("refresh");
    },
    informacoes: async (): Promise<BackEndLocalUsuarioInterface | undefined> => {
        const token = LocalStorage.pegar("token", "");
        if (token) {
            ServicoAPI.defaults.headers.common.Authorization = "Bearer " + token;
            const informacoes: BackEndLocalUsuarioInterface = (
                await ServicoAPI.get("api/locais")
            ).data;
            return informacoes;
        }
    },
};
