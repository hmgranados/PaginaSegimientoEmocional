import {Segment, TimeLine} from "../models";
import {emotionColorMap} from "./emotionColorMap.ts";

//Esto lo ha hecho el becario

export const convertTimeToMinutes = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
};

export const calculateSegments = (data: TimeLine[]) => {
    const segments: Segment[] = [];
    const totalMinutesInDay = 24 * 60;

    data.sort((a, b) => convertTimeToMinutes(a.startHour) - convertTimeToMinutes(b.startHour));

    let lastEndTime = 0;

    data.forEach((segment) => {
        const start = convertTimeToMinutes(segment.startHour);
        const end = convertTimeToMinutes(segment.endHour);
        const duration = end - start;

        if (start > lastEndTime) {
            const neutralSegmentDuration = start - lastEndTime;
            const neutralSegment = {
                color: emotionColorMap['NORMAL'],
                startPercent: (lastEndTime / totalMinutesInDay) * 100,
                width: (neutralSegmentDuration / totalMinutesInDay) * 100,
                content: 'ZZZ',
            };
            segments.push(neutralSegment);
        }

        segments.push({
            color: emotionColorMap[segment.mood],
            startPercent: (start / totalMinutesInDay) * 100,
            width: (duration / totalMinutesInDay) * 100,
            content: "",
        });

        lastEndTime = end;
    });

    if (lastEndTime < totalMinutesInDay) {
        const remainingDuration = totalMinutesInDay - lastEndTime;
        if (remainingDuration > 1) {
            const neutralSegment = {
                color: emotionColorMap['NORMAL'],
                startPercent: (lastEndTime / totalMinutesInDay) * 100,
                width: (remainingDuration / totalMinutesInDay) * 100,
                content: 'ZZZ',
            };
            segments.push(neutralSegment);
        }
    }

    return segments;
};
