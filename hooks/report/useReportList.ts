import {useQuery} from "@tanstack/react-query";
import {getReport} from "../../services";
import {useEffect, useState} from "react";
import {ReportMood} from "../../models";

const useReportList = () => {
    const [report, setReport] = useState<ReportMood>({happyMonth: "", sadDay: "", tiredDay: ""})

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["getReport"],
        queryFn: () => getReport()
    })

    useEffect(() => {
        if (!isLoading && isSuccess) {
            setReport(data?.data);
        }
    }, [isLoading, report, data]);

    return {
        report,
        isLoading
    }
}

export default useReportList