"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getDate = exports._getShift = exports._getMonth = exports._getDay = exports._getNumber = void 0;
const constant_1 = require("../constant");
function _getNumber(number) {
    if (number === undefined)
        return "";
    const stringNum = number.toString();
    if ((stringNum === null || stringNum === void 0 ? void 0 : stringNum.length) > 1) {
        const arr = stringNum === null || stringNum === void 0 ? void 0 : stringNum.split("").map((num) => {
            let numm = parseInt(num);
            return constant_1.Numbers[numm];
        });
        return arr.join('');
    }
    return number > 9 ? constant_1.Numbers[number] : constant_1.Numbers[0] + constant_1.Numbers[number];
}
exports._getNumber = _getNumber;
function _getDay(day) {
    if (day === undefined)
        return "";
    return constant_1.Days[day];
}
exports._getDay = _getDay;
function _getMonth(month) {
    if (month === undefined)
        return "";
    return constant_1.Months[--month];
}
exports._getMonth = _getMonth;
function _getShift(shift) {
    if (shift === undefined)
        return "";
    return constant_1.Shifts[shift];
}
exports._getShift = _getShift;
function _getDate(date) {
    return new Date(date);
}
exports._getDate = _getDate;
