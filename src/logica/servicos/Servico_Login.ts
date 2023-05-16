import { Resposta_API } from "../interfaces/interfaces_api";
import { Login_Interface, Usuario_Interface } from "../interfaces/interfaces_internas";
import { Servico_API } from "./Servico_API";
import { LocalStorage } from "./Servico_Armazenamento";

export const Servico_Login = {
    entrar: async (credenciais: Usuario_Interface): Promise<boolean> => {
        try {
            const login = (
                await Servico_API.post<Login_Interface>("api/auth/login", credenciais)
            ).data;
            LocalStorage.gravar("token", login.access);
            LocalStorage.gravar("refresh", login.refresh);
            Servico_API.defaults.headers.common.Authorization = "Bearer " + login.access;
            return true;
        } catch (erro) {
            return false;
        }
    },
    sair: (): void => {
        Servico_API.post("api/auth/logout", { refresh: LocalStorage.pegar("refresh", "") });
        LocalStorage.apagar("token");
        LocalStorage.apagar("refresh");
    },
    informacoes: async (): Promise<Resposta_API | undefined> => {
        const token = LocalStorage.pegar("token", "");
        if (token) {
            Servico_API.defaults.headers.common.Authorization = "Bearer " + token;
            const informacoes: Resposta_API = (await Servico_API.get("api/locais")).data;
            return informacoes;
        }
    },
};
