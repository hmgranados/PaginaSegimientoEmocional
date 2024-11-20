import "./Home.css";
import ImgHome from "../../assets/img/imgHome.jpg";

const Home = () => {
    return (
        <div className="hero">
            <div className="hero__image">
                <img className="img-Home" src={ImgHome} alt="Home Image" />
            </div>
            <div className="hero__cards">
                <div className="card card--yellow">Registra tu estado de ánimo diario</div>
                <div className="card card--pink">Visualiza tus cambios de estado emocional</div>
                <div className="card card--purple">Escribe tus pensamientos en el diario</div>
                <div className="card card--blue">Genera reportes de tus emociones </div>
            </div>
            <div className="hero__students">
                Estudiantes: Heyris Granados |   Diego Oñate   |   Luis Villamil   |   Jesús Diaz   |   Diego Ballesteros   |   Andres Antequera
            </div>
        </div>
    );
};

export default Home;
