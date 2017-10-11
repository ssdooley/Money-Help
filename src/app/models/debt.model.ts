import { DebtData } from './debt-data.model';

export class Debt {
    id: number;
    name: string;
    currentDay: Date;
    nextMonth: Date;
    nextn: number;
    availMonthly: number;
    data = new Array<DebtData>();

    constructor() {
        this.data = new Array<DebtData>();
        this.data.push(new DebtData());
        this.data.push(new DebtData());
        this.currentDay = new Date(Date.now());
        this.nextMonth = new Date(Date.now());
        let nextn = this.nextMonth.setMonth(this.nextMonth.getMonth() + 3) ;
        
    }

    get totalDebt(): number {
        let totalDebt = 0;

        if (this.data.length > 0) {
            this.data.map(payoff => {
                return payoff.payoff;
            }).forEach(payoff => {
                totalDebt += payoff;
            });
        }

        return totalDebt;
    }

    get remainPay(): number {
        let remainPay = 0;

        if (this.data.length > 0) {
            this.data.map(payoff => {
                return payoff.minPayment;
            }).forEach(payoff => {
                remainPay += payoff;
            });
        }
        return remainPay;
    }

    get nextMonths(): Date {
        let rightNow: Date = new Date(Date.now());
        let nextMonth = rightNow.getMonth();        
        let nextmonth = rightNow.setMonth(rightNow.getMonth() + 1) ;
        
        return this.nextMonth;
    }
}
