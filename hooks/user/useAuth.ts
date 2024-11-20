import {useMutation} from "@tanstack/react-query";
import {
    login as loginService,
    register as registerService
} from "../../services";
import {LoginModel, RegisterModel, ResponseAuth} from "../../models";
import {useState} from "react";
import {AxiosError, AxiosResponse} from "axios";
import {useNavigate} from "react-router-dom";
import {routes} from "../../routes";
import {useUserStore} from "./useUserStorage.ts";

const useAuth = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const { login } = useUserStore()

    const navigate = useNavigate()

    const mutationLogin = useMutation({
        mutationFn: (logi: LoginModel) => loginService(logi),
        onSuccess: (data: AxiosResponse<ResponseAuth>) => {
            setLoading(false)
            if (data.status === 200){
                localStorage.setItem("token", data.data.token.access)
                login(data.data.token.access)
                navigate(routes.USER.MOOD)
            }
        },
        onError: (error: AxiosError) => {
            setLoading(false)
            setError(error.response?.data as string);
        }
    })

    const mutationRegister = useMutation({
        mutationFn: (register: RegisterModel) => registerService(register),
        onSuccess: (data: AxiosResponse<ResponseAuth>) => {
            setLoading(false)
            if (data.status === 200){
                navigate(routes.LOGIN)
            }
        },
        onError: (error: AxiosError) => {
            setLoading(false)
            setError(error?.response?.data as string)
        }
    })

    const handleLogin = (login: LoginModel) => {
        setLoading(true)
        mutationLogin.mutate(login)
    }

    const handleRegister = (register: RegisterModel) => {
        setLoading(true)
        mutationRegister.mutate(register)
    }

    return {
        handleLogin,
        loading,
        handleRegister,
        error
    }
}

export default useAuth;