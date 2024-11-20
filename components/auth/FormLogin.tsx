import './FormLoginStyles.css'
import useAuth from "../../hooks/user";
import {useForm, SubmitHandler} from "react-hook-form";
import {LoginModel} from "../../models";
import {LoginLoader} from "../loaders";

const FormLogin = () => {
    const { reset, register, handleSubmit, formState: {errors, isSubmitting} } = useForm<LoginModel>();
    const { handleLogin, loading, error } = useAuth();

    const onSubmit: SubmitHandler<LoginModel> = (data) => {
        console.log(data)
        handleLogin(data)
        reset()
    }

    return (
        <>
            {loading ? (
                <LoginLoader/>
            ) : (
                <div className="container">
                    <div className="heading">Iniciar sesión</div>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            placeholder="Usuario"
                            className="input"
                            {...register("username", { required: {
                                value: true, message: "El usuario es requerido"},
                            })}
                        />
                        {errors.username && <span className="error">{errors.username.message}</span>}
                        <input
                            placeholder="Contraseña"
                            type="password"
                            className="input"
                            {...register("password", { required: {
                                value: true, message: "La contraseña es requerida"},
                                minLength: {
                                    value: 6, message: "La contraseña debe tener al menos 6 caracteres"
                                }
                            })}
                        />
                        {errors.password && <span className="error">{errors.password.message}</span>}
                        <input value="Iniciar sesión" type="submit" className="login-button" disabled={isSubmitting}/>
                    </form>
                    {error === "User not found" && <span className="error">Correo o contraseña invalidos</span>}
                </div>
            )}
        </>
    )
}

export default FormLogin;