import {useQuery} from "@tanstack/react-query";
import {getReportWeek} from "../../services";
import {ReportWeekResponse} from "../../models";
import {useEffect, useState} from "react";

const useReportWeek = () => {
    const [reportWeek, setReportWeek] = useState<ReportWeekResponse[]>([{dayWeek: "", hoursHappy: 0, hoursSad: 0}]);

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['reportWeek'],
        queryFn: async () => getReportWeek(),
    })

    useEffect(() => {
        if (!isLoading && isSuccess) {
            setReportWeek(data?.data);
        }
    }, [isLoading, reportWeek, data]);

    return {
        reportWeek,
        loadingReportW: isLoading,
    }

}

export default useReportWeek;