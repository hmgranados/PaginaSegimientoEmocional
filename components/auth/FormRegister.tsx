import './FormLoginStyles.css';
import {SubmitHandler, useForm} from "react-hook-form";
import {RegisterModel} from "../../models";
import useAuth from "../../hooks/user";
import {RegisterLoader} from "../loaders";

const FormRegister = () => {

    const { reset, register, handleSubmit, formState: {errors, isSubmitting} } = useForm<RegisterModel>();

    const { loading, handleRegister, error } = useAuth()

    const onSubmit: SubmitHandler<RegisterModel> = (data) => {
        handleRegister(data)
        reset()
    }

    return (
        <>
            {loading ? (
                <RegisterLoader/>
            ) : (
                <div className="container" onSubmit={handleSubmit(onSubmit)}>
                    <div className="heading">Registrate</div>
                    <form className="form">
                        <input
                            placeholder="Usuario"
                            className="input"
                            {...register("username", {
                                required: {
                                    value: true, message: "El usuario es requerido"
                                },
                            })}
                        />
                        {errors.username && <span className="error">{errors.username.message}</span>}
                        <input
                            placeholder="Correo"
                            className="input"
                            {...register("email", { required: {
                                    value: true, message: "El correo es requerido"},
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: 'Correo no válido'
                                }
                            })}
                        />
                        {errors.email && <span className="error">{errors.email.message}</span>}
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
                        <input value="Registrarse" type="submit" className="login-button" disabled={isSubmitting}/>
                    </form>
                    {error && <span className="error">{error}</span>}
                </div>
            ) }
        </>
    )
}

export default FormRegister;