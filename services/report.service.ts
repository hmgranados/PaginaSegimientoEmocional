import axios, {AxiosResponse} from "axios";
import {ReportMonthResponse, ReportMood, ReportWeekResponse} from "../models";

export const getReportMonth = async (): Promise<AxiosResponse<ReportMonthResponse[]>> => {
    return await axios.get(`/userMoods/user/reportMonths`);
}

export const getReportWeek = async (): Promise<AxiosResponse<ReportWeekResponse[]>> => {
    return await axios.get(`/userMoods/user/reportLastWeek`);
}

export const getReport = async (): Promise<AxiosResponse<ReportMood>> => {
    return await axios.get(`/userMoods/user/reports`);
}