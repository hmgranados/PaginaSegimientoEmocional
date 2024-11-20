import { VictoryPie, VictoryLabel } from 'victory';
import {emotionColorMap} from "../../../utils";
import './graphsStyles.css'
import * as React from "react";
import {PorcentUserMood} from "../../../models";

interface GraphTestVictoryProps {
    listData: PorcentUserMood[];
}

const GraphTestVictory: React.FC<GraphTestVictoryProps> = ({listData}) => {

    const listColor = listData.map((data) => {
        return emotionColorMap[data.x];
    });

    return (
        <div className="graph-con">
            <svg viewBox="0 0 390 390" width="390" height="390" className="grafica-sumary">
                <VictoryPie
                    standalone={false}
                    width={390} height={390}
                    data={listData}
                    colorScale={listColor}
                    innerRadius={85}
                    labels={({datum}) => `${datum.y}%`}
                    style={{
                        labels: {fontSize: 15},
                    }}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{fontSize: 20, fill: "#89939E", fontWeight: "bold"}}
                    x={195}
                    y={195}
                    text={`${listColor.length} estados 
                    de animo 
                    en este dia`}
                />
            </svg>

            <h1 className="fecha-graficas">{listData[0].date}</h1>
        </div>
    );
}

export default GraphTestVictory;