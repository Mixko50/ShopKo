import axios from "axios";
// import CookieHelper from "cookie-helper";

let isDev = false;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    isDev = true;
}

const instance = axios.create({
    baseURL: isDev ? "http://localhost:8080" : "https://shopkoapi.mixko.ml",
});

export default instance;
