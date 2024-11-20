import { Fade } from "react-awesome-reveal";
import {routes} from "../../routes";
import {useNavigate} from "react-router-dom";
import {
    FaFaceGrinBeam,
    FaFaceMeh,
    FaFaceAngry,
    FaFaceTired,
    FaFaceFrown
} from "react-icons/fa6";
import './errorPageStyle.css';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <section className="section">

            <div className="icons">
                <FaFaceGrinBeam className="icon feliz"/>
                <FaFaceMeh className="icon normal"/>
                <FaFaceAngry className="icon enojado"/>
                <FaFaceTired className="icon cansado"/>
                <FaFaceFrown className="icon triste"/>
            </div>
            <div className="info">
                <Fade direction={"down"}>
                    <h1>404</h1>
                    <h2>Parece que esto está solo por aqui</h2>
                    <button className="button" onClick={() => navigate(routes.HOME)}>
                        Volver al inicio</button>
                </Fade>
            </div>
        </section>
    )
}

export default ErrorPage;