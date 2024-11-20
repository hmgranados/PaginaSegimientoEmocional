import {Chart} from "react-google-charts";
import {data, options} from "./configGraph.ts";

const Graph = () => {
    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    )
}

export default Graph;