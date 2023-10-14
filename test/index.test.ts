import { assert } from 'chai';
import { _getDate, _getDay, _getMonth, _getNumber, _getShift } from "../src/util";
import convertDate from '../src';

describe('#Get day number', () => {
    it("Give date: '6', should return ០៦", () => {
        assert.equal(_getNumber(6), '០៦');
    });
})

describe('#Get day', () => {
    it("Give date: 6, should return សៅរ៍", () => {
        assert.equal(_getDay(6), 'សៅរ៍');
    });
})

describe('#Get sample full UTC date', () => {
    it("Give date: 06/08/02, should return 2002-08-06T00:00:00.000Z", () => {
        assert.deepEqual(_getDate('2002-08-06'), new Date('2002-08-06'));
    });
})

describe('#Get month', () => {
    it("Give month: 8, should return សីហា", () => {
        assert.equal(_getMonth(8), 'សីហា');
    });
})

describe('#Get shift', () => {
    it("Give time: PM, should return ល្ងាច", () => {
        assert.equal(_getShift('PM'), 'ល្ងាច');
    });

    it("Give time: AM, should return ព្រឹក", () => {
        assert.equal(_getShift('AM'), 'ព្រឹក');
    });
})


describe('#convertDate', () => {
    it("Give date: '2002-08-06', should return ០៦ សីហា ២០០២", () => {
        assert.equal(convertDate('2002-08-06'), '០៦ សីហា ២០០២');
    });

    it("Give date: '2002-08-06' L, should return ០៦/០៨/២០០២", () => {
        assert.equal(convertDate('2002-08-06', 'L'), '០៦/០៨/២០០២');
    });

    it("Give date: '2002-08-06' LL, should return ០៦ សីហា ២០០២", () => {
        assert.deepEqual(convertDate('2002-08-06', 'LL'), '០៦ សីហា ២០០២');
    });

    // it("Give date: '2002-08-06' LLL, should return ០៦ សីហា ២០០២ ០៧:០០ ព្រឹក", () => {
    //     assert.deepEqual(convertDate('2002-08-06', 'LLL'), '០៦ សីហា ២០០២ ០៧:០០ ព្រឹក');
    // });

    // it("Give date: '2002-08-06' LLLL, should return សៅរ៍, ០៦ សីហា ២០០២ ០៧:០០ ព្រឹក", () => {
    //     assert.deepEqual(convertDate('2002-08-06', 'LLLL'), 'សៅរ៍, ០៦ សីហា ២០០២ ០៧:០០ ព្រឹក');
    // });

    const date = new Date('2002-08-06');
    it(`Give UTC date: ${date}, should return០៦ សីហា ២០០២`, () => {
        assert.equal(convertDate(date), '០៦ សីហា ២០០២');
    });
})
