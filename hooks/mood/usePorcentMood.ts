import {useEffect, useState} from "react";
import {PorcentUserMood} from "../../models";
import {useQuery} from "@tanstack/react-query";
import {getPorcentajesMood} from "../../services";

const usePorcentMood = () => {
    const [porcentMoods, setPorcentMoods] = useState<PorcentUserMood[]>([]);

    const { data, isLoading, error, isSuccess } = useQuery({
        queryKey: ['porcentMoods'],
        queryFn: getPorcentajesMood,
    })

    useEffect(() => {
        if (!isLoading && isSuccess){
            setPorcentMoods(data?.data)
        }
    }, [porcentMoods, isLoading]);

    return {
        porcentMoods,
        isLoading,
        error
    }

}

export default usePorcentMood;