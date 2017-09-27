export class DebtData {
    id: number;
    debtType: string;
    payoff: number;
    apr: number;
    minPayment: number;
    actPayment: number;

    constructor() {
        this.debtType = 'Car Loan';
        this.payoff = 0;
        this.apr = 0;
        this.minPayment = 0;
        this.actPayment = 0;
    }
}