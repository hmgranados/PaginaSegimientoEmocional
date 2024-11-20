import {ReportMonthResponse} from "../models";

export const groupByMonth = (reportMonth:  ReportMonthResponse[]) => {
    const groupedBy: { monthName: string; hours: number; mood: string }[] = reportMonth.reduce<ReportMonthResponse[]>((acc, item) => {
        const existingMonth = acc.find((entry: ReportMonthResponse) => entry.monthName === item.monthName);

        if (existingMonth) {
            existingMonth.hours += item.hours;
        } else {
            acc.push({
                monthName: item.monthName,
                hours: item.hours,
                mood: item.mood
            });
        }

        return acc;
    }, []);

    return groupedBy;
}