"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
function convertDate(date, format = '') {
    const _date = (0, util_1._getDate)(date);
    const Day = (0, util_1._getDay)(new Date(_date).getDate());
    const DayNum = (0, util_1._getNumber)(new Date(_date).getDate());
    const Month = (0, util_1._getMonth)(new Date(_date).getMonth() + 1);
    const MonthNum = (0, util_1._getNumber)(new Date(_date).getMonth() + 1);
    const Year = (0, util_1._getNumber)(new Date(_date).getFullYear());
    const Shift = (0, util_1._getShift)(new Date(_date).getHours() >= 12 ? "PM" : "AM");
    const Hour = (0, util_1._getNumber)(new Date(_date).getHours());
    const Minute = (0, util_1._getNumber)(new Date(_date).getMinutes());
    const Second = (0, util_1._getNumber)(new Date(_date).getSeconds());
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
exports.default = convertDate;
