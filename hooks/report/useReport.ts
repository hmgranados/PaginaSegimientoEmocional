import {useQuery} from "@tanstack/react-query";
import {getReportMonth} from "../../services";
import {useEffect, useState} from "react";
import {ReportMonthResponse} from "../../models";

const useReport = () => {
    const [reportMonth, setReportMonth] = useState<ReportMonthResponse[]>([{mood: "", hours: 0, monthName: ""}]);

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['report'],
        queryFn: async () => getReportMonth(),
    })

    useEffect(() => {
        if (!isLoading && isSuccess) {
            setReportMonth(data?.data);
        }
    }, [isLoading, reportMonth, data]);

    return {
        reportMonth,
        loadingReportM: isLoading,
    }

}

export default useReport;