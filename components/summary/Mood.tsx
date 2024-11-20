import './moodStyle.css';
import {useLongestMood} from "../../hooks";
import {emotionColorMap, moodImages} from "../../utils";
import {LoginLoader} from "../loaders";
import {convertMoodDayInSpanish} from "../../adapters";
import {routes} from "../../routes";
import {useNavigate} from "react-router-dom";

const Mood = () => {

    const { longetMood, isLoading, error } = useLongestMood();
    const navigate = useNavigate();

    const mood = longetMood.moodname;
    const estadoAnimo = convertMoodDayInSpanish(longetMood.moodname);

    const moodI = {
        img: moodImages[mood]
    }


    return (
        <div className="mood">
            {error ? (
                    <div className="sin-estados">
                        <p className="mood-hours">Sin emociones, cuentame primero ¿Cómo te sientes?</p>
                        <button className="button" onClick={() => navigate(routes.USER.MOOD)}>Como me siento</button>
                    </div>)
                : (
                    isLoading ? (
                            <div className="loading-mood"><LoginLoader/></div>)
                : (
                    <>
                        <div className="container-mood-img">
                            <img className="image-mood" src={moodI.img} alt={mood}/>
                        </div>
                        <div className="container-mood-text">
                            <h1 className="emocion-name" style={{color: `${emotionColorMap[mood]}`}}>{estadoAnimo}</h1>
                            <p className="mood-hours">{mood === "NORMAL" ? "" : longetMood.hours} Horas</p>
                        </div>
                    </>
                )
            )}
        </div>
    );
}

export default Mood;