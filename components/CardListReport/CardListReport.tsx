import CardReport from "../cardReport/CardReport";
import './CardListReport.css'
import {useReportList} from "../../hooks/report";
import {convertToSpanish} from "../../adapters";

const CardListReport = () => {
    const listTitle = [`user este fue tu mes mas feliz`, "user te sentiste mas cansado este dia", "En este dia estuviste mas triste"]

    const { report }  = useReportList()

    console.log(report)

    return (
        <div className="cardList__content">
            <h3 className="cardList__title">Tablero de reporte</h3>
            <div className="cardList">
                <CardReport  title={listTitle[0]} text={convertToSpanish(report.happyMonth)} />
                <CardReport  title={listTitle[1]} text={convertToSpanish(report.tiredDay)} />
                <CardReport  title={listTitle[2]} text={convertToSpanish(report.sadDay)} />
            </div>
        </div>
    )
}

export default CardListReport;
