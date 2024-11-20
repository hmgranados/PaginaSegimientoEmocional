import './SummaryMoodStyle.css'
import {calculateSegments} from "../../utils";
import {useTimelineMood} from "../../hooks";
import {LineaTimeLoader} from "../loaders";
import { GiNightSleep } from "react-icons/gi";

const SummaryMoodDay = () => {
    const hours = Array.from({ length: 24 }, (_, i) => i);
    const { timeline, isLoading } = useTimelineMood();
    const segments = calculateSegments(timeline);

    return (
        <div className="timeline-container">
            {isLoading ? (
                <>
                    <LineaTimeLoader />
                </>
            ) : (
                <>
                    <div className="container-line-mood">
                        {hours.map((hour) => (
                            <div key={hour} className="timeline-hour divisor">
                                {/*<p className="hour-label">{hour}</p>*/}
                            </div>
                        ))}
                        {segments.map((segment, index) => (
                            <div
                                key={index}
                                className={`timeline-hour colored-segment ${index === 0 ? 'first-colored-segment' : ''}`}
                                style={{
                                    backgroundColor: segment.color,
                                    width: `${segment.width}%`,
                                    left: `${segment.startPercent}%`,
                                    position: 'absolute',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'white',
                                    fontSize: '35px',
                                }}
                            >{(segment.content === "ZZZ") ? <GiNightSleep />: ""}</div>
                        ))}
                    </div>
                    <div className="container2">
                        {hours.map((hour) => (
                            <div key={hour} className="timeline-hour">
                                <p className="hour-label">{hour}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default SummaryMoodDay;