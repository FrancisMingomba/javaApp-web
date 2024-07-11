import http from "./httpService";
//import  apiUlr  from "../config.json";
import config from '../config.json';

//const apiEndpoint = apiUlr + "/auth";
const loginEndpoint = config.apiEndpoint + "/auth";

export function login(email, password) {
    return http.post(loginEndpoint, { email, password});

}