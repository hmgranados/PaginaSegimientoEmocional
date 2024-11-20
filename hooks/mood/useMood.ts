import {useMutation, useQuery} from "@tanstack/react-query";
import {getMoods, saveMood} from "../../services";
import {MoodModel, UserMoodRequest} from "../../models";
import {useEffect, useState} from "react";
import {SnackbarUtils} from "../../components";
const useMood = () => {
    const [moods, setMoods] = useState<MoodModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    const { data, error, isLoading, isSuccess } = useQuery({
        queryKey: ['moods'],
        queryFn: getMoods,
    })

    useEffect(() => {
        if (isSuccess){
            setMoods(data?.data)
        }
    }, [moods,isLoading]);

    const mutationSaveMood = useMutation({
        mutationFn: (mood: UserMoodRequest) => saveMood(mood),
        onSuccess: (data) => {
            setLoading(false)
            console.log("Mood saved", data)
            SnackbarUtils.success("Estado de ánimo guardado")
        }
    })

    const handleSaveMood = (mood: UserMoodRequest) => {
        setLoading(true)
        mutationSaveMood.mutate(mood)
    }

    return {
        moods,
        isLoading,
        error,
        loading,
        handleSaveMood
    }
}

export default useMood;