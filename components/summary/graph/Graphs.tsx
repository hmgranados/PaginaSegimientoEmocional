import './graphsStyles.css';
import GraphTestVictory from "./GraphTestVictory.tsx";
import {usePorcentMood} from "../../../hooks";
import {useNavigate} from "react-router-dom";
import {routes} from "../../../routes";
import {daySeparatorList, emotionColorMap} from "../../../utils";
import {convertMoodDayInSpanish} from "../../../adapters";

const Graphs = () => {

    const { porcentMoods, isLoading} = usePorcentMood();
    const navigate = useNavigate();

    const newList = daySeparatorList(porcentMoods);

    return (
        <div className="container-graphs">
            <h1 className="titulo-graficas">Así han sido tus emociones estos ultimos dias</h1>
            {isLoading ? <h1>Cargando...</h1>
                : (
                    newList.length === 0 ? <>
                            <h1 style={{color: "#89939E"}}>No has registrado suficientes estados de animo</h1>
                            <button className="button" onClick={() => navigate(routes.USER.MOOD)}>Como me siento</button>
                        </>
                        : (
                            <div className="graphs">
                                {newList.map((listData, index) => (
                                    <GraphTestVictory key={index} listData={listData}/>
                                ))}
                            </div>
                        )
                )}
            <div className="emotions-repre">
                {Object.entries(emotionColorMap).map(([key, value]) => (
                    <div key={key} className="emotion-info">
                        <div className="emotion-color" style={{
                            backgroundColor: `${value}`,
                            width: "20px",
                            height: "20px"}}/>
                        <p>{convertMoodDayInSpanish(key)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Graphs;