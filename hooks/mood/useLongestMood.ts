import {LongestUserMoodResponse} from "../../models";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getLongestMood} from "../../services";

const useLongestMood = () => {
    const [longetMood, setLongestMood] = useState<LongestUserMoodResponse>({hours: 0, moodname: ""});

    const { data, error, isLoading, isSuccess } = useQuery({
        queryKey: ['longestMood'],
        queryFn: getLongestMood,
    })

    useEffect(() => {
        if (!isLoading && isSuccess){
            setLongestMood(data?.data)
        }
    }, [longetMood, isLoading]);

    return {
        longetMood,
        isLoading,
        error
    }
}

export default useLongestMood;