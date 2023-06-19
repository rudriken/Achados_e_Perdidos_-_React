import axios from "axios";
import { LocalStorage } from "./ServicoArmazenamento";

const url = process.env.NEXT_PUBLIC_API;

export const ServicoApi = axios.create({
    baseURL: url,
    headers: { "content-type": "application/json" },
});

setInterval(async () => {
    if (LocalStorage.pegar("token", "")) {
        const resposta = (
            await ServicoApi.post<{ access: string; refresh: string }>(
                "/api/auth/refresh",
                null,
                {
                    headers: { Authorization: "Bearer " + LocalStorage.pegar("refresh", "") },
                }
            )
        ).data;
        LocalStorage.gravar("token", resposta.access);
        LocalStorage.gravar("refresh", resposta.refresh);
    }
}, 1200000);
