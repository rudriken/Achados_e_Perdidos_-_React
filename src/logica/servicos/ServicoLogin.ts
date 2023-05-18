import { BackLocalUsuarioInterface, BackLoginInterface } from "../interfaces/BackInterfaces";
import { FrontLoginInterface } from "../interfaces/FrontInterfaces";
import { ServicoAPI } from "./ServicoApi";
import { LocalStorage } from "./ServicoArmazenamento";

export const ServicoLogin = {
    entrar: async (credenciais: FrontLoginInterface): Promise<boolean> => {
        try {
            const login = (
                await ServicoAPI.post<BackLoginInterface>("api/auth/login", credenciais)
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
    informacoes: async (): Promise<BackLocalUsuarioInterface | undefined> => {
        const token = LocalStorage.pegar("token", "");
        if (token) {
            ServicoAPI.defaults.headers.common.Authorization = "Bearer " + token;
            const informacoes: BackLocalUsuarioInterface = (
                await ServicoAPI.get("api/locais")
            ).data;
            return informacoes;
        }
    },
};
