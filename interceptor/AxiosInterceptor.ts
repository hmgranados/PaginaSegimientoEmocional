import axios, {AxiosResponse, InternalAxiosRequestConfig} from "axios";
import {SnackbarUtils} from "../components";


// const baseUrl = 'http://localhost:49152';
const baseUrl = 'https://emotionaltracker-api-c3ceg2hzetbhcjdm.eastus-01.azurewebsites.net/';
const apiUrl = `${baseUrl}`

axios.defaults.baseURL = apiUrl;

export const AxiosInterceptor = () => {
    const updateHeaders = (req: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token') || '';
        if (token) {
            req.headers['Authorization'] = `Bearer ${token}`;
        }
        return req;
    };
    axios.interceptors.request.use(updateHeaders);

    axios.interceptors.response.use(
        (res: AxiosResponse) =>{
        return res;
    },
        (error) => {
            if (error.code === "ECONNABORTED") {
                SnackbarUtils.warning("La solicitud ha tardado demasiado tiempo en responder. Por favor, intente nuevamente.");
            } else if (error.message === "Network Error") {
                SnackbarUtils.error("No se ha podido establecer conexion con el servidor.");
            } else if (error.response) {
                if (error.response.status === 401) {
                    SnackbarUtils.info("No está autorizado para realizar esta acción.");
            }
            else if(error.response.status === "ERR_CONNECTION_REFUSED") {
                    alert("No se ha podido establecer conexion con el servidor.");
                }
            } else {
                SnackbarUtils.error("Ha ocurrido un error inesperado. Por favor, intente nuevamente.");
            }
            return Promise.reject(error);
        }
    )
}