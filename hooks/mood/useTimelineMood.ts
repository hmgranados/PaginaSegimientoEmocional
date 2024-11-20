import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getTimeLineMood} from "../../services";
import {TimeLine} from "../../models";

const useTimelineMood = () => {
    const [timeline, setTimeline] = useState<TimeLine[]>([]);

    const { data, error, isLoading, isSuccess } = useQuery({
        queryKey: ['timeline'],
        queryFn: getTimeLineMood,
    })

    useEffect(() => {
        if (!isLoading && isSuccess){
            setTimeline(data?.data)
        }
    }, [timeline, isLoading]);

    return {
        timeline,
        isLoading,
        error
    }
}

export default useTimelineMood;