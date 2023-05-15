import axios from "axios";

const url = "http://127.0.0.1:8000";

export const ServicoAPI = axios.create({
    baseURL: url,
    headers: { "content-type": "application/json" },
});

