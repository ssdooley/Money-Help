import { MonthlyCalcs } from './monthly-calcs';

export class MonthlyBalance {
    id: number;
    debtName: string;
    apRate: number;
    interest: number;
    balance: number;
    monthlyPayment: number;
    additionalPayment: number;
    remainingMonthlyBalance: number;
    newPayoff: number;
    monthlyDebtTotal: number;
    monthlyArray = new Array<MonthlyCalcs>();

    constructor () {}

}