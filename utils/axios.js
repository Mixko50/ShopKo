import axios from "axios";
import isDevEnv from "../helper/isdevenv";
import CookieHelper from "cookie-helper";

const instance = axios.create({
    baseURL: isDevEnv
        ? "http://localhost:8080"
        : "https://shopkoapi.mixko.ml",
});


export default instance;
