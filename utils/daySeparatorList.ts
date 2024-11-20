import {PorcentUserMood} from "../models";

export function daySeparatorList(data: PorcentUserMood[]): PorcentUserMood[][] {
    const groupedByDate = new Map<string, PorcentUserMood[]>();
    for (const item of data) {
        const date = item.date;
        if (!groupedByDate.has(date)) {
            groupedByDate.set(date, []);
        }
        groupedByDate.get(date)!.push(item);
    }

    const groupedLists = Array.from(groupedByDate.values()).map(list =>
        list.sort((a, b) => {
            const dateA = new Date(a.date.split('-').reverse().join('-'));
            const dateB = new Date(b.date.split('-').reverse().join('-'));
            return dateA.getTime() - dateB.getTime();
        })
    );

    return groupedLists.sort((a, b) => {
        const dateA = new Date(a[0].date.split('-').reverse().join('-'));
        const dateB = new Date(b[0].date.split('-').reverse().join('-'));
        return dateA.getTime() - dateB.getTime();
    });
}