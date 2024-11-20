import axios, {AxiosResponse} from "axios";
import {
    LongestUserMoodResponse,
    MoodModel,
    PorcentUserMood,
    TimeLine,
    UserMoodRequest,
    UserMoodResponse
} from "../models";
import {formatDate} from "../utils";

export const getMoods = async (): Promise<AxiosResponse<MoodModel[]>> => {
    return await axios.get('/moods')
}

export const saveMood = async (mood: UserMoodRequest): Promise<AxiosResponse<UserMoodResponse>> => {
    return await axios.post('/userMoods', mood)
}

export const getTimeLineMood = async (): Promise<AxiosResponse<TimeLine[]>> => {
    return await axios.get('/userMoods/user/moodsTimeInDay')
}

export const getLongestMood = async (): Promise<AxiosResponse<LongestUserMoodResponse>> => {
    return await axios.get('/userMoods/user/longestMood')
}

export const getPorcentajesMood = async (): Promise<AxiosResponse<PorcentUserMood[]>> => {
    const endDate = formatDate(new Date())
    const newDate = new Date(new Date());
    newDate.setDate(newDate.getDate() - 3);
    const startDate = formatDate(newDate)

    return await axios.get('/userMoods/user/moodPercentages', {
        params: {
            startDate,
            endDate
        }
    })
}