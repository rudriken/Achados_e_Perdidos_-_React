import axios from "axios";

const url = process.env.NEXT_PUBLIC_API;

export const ServicoApi = axios.create({
    baseURL: url,
    headers: { "content-type": "application/json" },
});
