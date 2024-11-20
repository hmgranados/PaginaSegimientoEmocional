import CardListReport from "../../components/CardListReport/CardListReport";
import GraphicsReport from "../../components/graphicsReport/GraphicsReport";
import './reporteStyle.css'

const ReportPage = () => {
    return (
        <div className="reporte-page">
            
            <CardListReport/>
            <GraphicsReport/>
        </div>
    )
}

export default ReportPage;