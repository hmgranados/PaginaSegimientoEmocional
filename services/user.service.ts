import axios, {AxiosResponse} from "axios";
import {LoginModel, RegisterModel, ResponseAuth} from "../models";

export const login = async (login: LoginModel): Promise<AxiosResponse<ResponseAuth>> => {
    return axios.post("/auth/login", login)
}

export const register = async (register: RegisterModel): Promise<AxiosResponse<ResponseAuth>> => {
    return axios.post("/auth/register", register)
}