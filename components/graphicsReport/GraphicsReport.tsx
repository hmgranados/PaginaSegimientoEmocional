import { Chart } from "react-google-charts";
import './GraphicsReport.css'
import useReport from "../../hooks/report/useReport.ts";
import {emotionColorMap} from "../../utils";
import {LoginLoader} from "../loaders";
import {useReportWeek} from "../../hooks/report";

export const data = [
    ["Dia de la semana", "Feliz", "Triste"],
    ["Lunes", 1000, 400],
    ["Martes", 1170, 460],
    ["Miercoles", 660, 1120],
    ["Jueves", 1030, 540],
    ["Viernes", 1030, 540],
    ["Sabado", 1030, 540],
    ["Domingo", 1030, 540],
];

export const dataBarM = [
    [
        "Emocion",
        "Horas",
        { role: "style" },
        {
            role: "annotation",
            type: "string",
        },
    ],
    ["Enero", 7.94, "color: #FFD700", "Feliz"],
    ["Febrero", 10.49, "color: #4682B4", "Triste"], 
    ["Marzo", 19.3, "color: #708090", "Cansado"], 
    ["Abril", 15.6, "color: #FF4500", "Enojado"],
    ["Mayo", 12.3, "color: #D3D3D3", "Normal"],
    ["Junio", 14.1, "color: #FFD700", "Feliz"], 
    ["Julio", 9.8, "color: #4682B4", "Triste"], 
    ["Agosto", 11.2, "color: #708090", "Cansado"], 
    ["Septiembre", 18.5, "color: #FF4500", "Enojado"], 
    ["Octubre", 16.4, "color: #D3D3D3", "Normal"], 
    ["Noviembre", 13.9, "color: #FFD700", "Feliz"], 
    ["Diciembre", 20.1, "color: #4682B4", "Triste"]
];

export const optionsBar = {
    title: "Emocion predominante en el mes",
    legend: { position: "none" },
};

export const options = {
    title: "Diferentes emociones a lo largo de tu semana",
    curveType: "function",
    legend: { position: "right" },
};

const GraphicsReport = () => {
    const { reportMonth, loadingReportM } = useReport();
    const { loadingReportW, reportWeek } = useReportWeek()

    const convertedList = reportMonth.map(item => [
        item.monthName,
        parseFloat(item.hours.toFixed(2)),
        `color: ${emotionColorMap[item.mood.toUpperCase()] || '#d4d4d4'}`,
        item.mood
    ]);

    const convertedListW = reportWeek.map(item => [
        item.dayWeek,
        parseFloat(item.hoursHappy.toFixed(2)),
        parseFloat(item.hoursSad.toFixed(2))
    ]);

    const dataBar = [
        ["Emocion", "Horas", { role: "style" }, { role: "annotation", type: "string",},],
        ...convertedList
    ]

    const dataL = [
        ["Dia de la semana", "Feliz", "Triste"],
        ...convertedListW
    ];

    return (
        <div className="grafica">
            <div className="grafica__linel">
                {loadingReportW ? <LoginLoader/>
                : (
                    <Chart
                        chartType="LineChart"
                        data={dataL}
                        width='100%'
                        height='100%'
                        options={options}
                        legendToggle
                    />
                )}
            </div>
            <div className="grafica__barras">
                {loadingReportM ? <LoginLoader/>
                : (
                    <Chart
                        chartType="ColumnChart"
                        width="100%"
                        height="100%"
                        data={dataBar}
                        options={optionsBar}
                    />
                )}
            </div>
        </div>
    )
}

export default GraphicsReport;