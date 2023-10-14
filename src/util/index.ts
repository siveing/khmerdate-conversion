import { Days, Months, Numbers, Shifts } from "../constant";

export function _getNumber(number: number): string {
    if (number === undefined) return "";
    const stringNum = number.toString();
    if (stringNum?.length > 1) {
        const arr = stringNum?.split("").map((num) => {
            let numm = parseInt(num)
            return Numbers[numm];
        });
        return arr.join('');
    }
    return number > 9 ? Numbers[number] : Numbers[0] + Numbers[number];
}

export function _getDay(day: number): string {
    if (day === undefined) return "";
    return Days[day];
}

export function _getMonth(month: number): string {
    if (month === undefined) return "";
    return Months[--month];
}

export function _getShift(shift: string): string {
    if (shift === undefined) return "";
    return Shifts[shift];
}

export function _getDate(date: Date | string): Date {
    return new Date(date);
}
