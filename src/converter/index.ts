import { _getDate, _getDay, _getMonth, _getNumber, _getShift } from '../util';

export default function convertDate(date: Date | string, format = ''): string {
    const _date: Date = _getDate(date);
    const Day: string = _getDay(new Date(_date).getDate());
    const DayNum: string = _getNumber(new Date(_date).getDate());
    const Month: string = _getMonth(new Date(_date).getMonth() + 1);
    const MonthNum: string = _getNumber(new Date(_date).getMonth() + 1);
    const Year: string = _getNumber(new Date(_date).getFullYear());
    const Shift: string = _getShift(new Date(_date).getHours() >= 12 ? "PM" : "AM");

    const Hour: string = _getNumber(new Date(_date).getHours());
    const Minute: string = _getNumber(new Date(_date).getMinutes());
    const Second: string = _getNumber(new Date(_date).getSeconds());

    const formatL = `${DayNum}/${MonthNum}/${Year}`;
    const formatT = `${Hour}:${Minute} ${Shift}`;
    const formatLL = `${DayNum} ${Month} ${Year}`;

    switch (format) {
        case "L":
            return `${formatL}`;
        case "LL":
            return `${formatLL}`;
        case "LLL":
            return `${formatLL} ${formatT}`;
        case "LLLL":
            return `${Day}, ${formatLL} ${formatT}`;
        case "LT":
            return `${formatL} ${formatT}`;
        default:
            return `${formatLL}`;
    }
}

