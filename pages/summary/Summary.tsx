import {SectionInfo, Mood, SummaryMoodDay, Graphs} from "../../components";
import  './SummaryStyle.css'

const Summary = () => {
    return (
        <div className="summary">
            <SectionInfo />
            <Mood/>
            <SummaryMoodDay/>
            <Graphs/>
        </div>
    )
}

export default Summary;