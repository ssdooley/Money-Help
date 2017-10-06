export class DebtData {
    id: number;
    debtType: string;
    payoff: number;
    apr: number;
    minPayment: number;
    actPayment: number;
    availMonthly: number;
    extraPayment: number;

    constructor() {
        this.debtType = 'Car Loan';
        this.payoff = 2000;
        this.apr = 1;
        this.minPayment = 100;
        this.actPayment = 0;
        this.availMonthly = 3500;
    }
}
