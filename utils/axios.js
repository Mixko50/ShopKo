import axios from "axios";

let isDev = false;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    isDev = true;
}

const instance = axios.create({
    baseURL: isDev ? "http://localhost:8080" : "http://shopkoapi.mixko.ml:8080",
    withCredentials: true,
});

export default instance;
