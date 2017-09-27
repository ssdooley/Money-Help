import { DebtData } from './debt-data.model';

export class Debt {
    id: number;
    name: string;
    data = new Array<DebtData>();

    constructor() {
        this.data = new Array<DebtData>();
        this.data.push(new DebtData());
        this.data.push(new DebtData());
}

get totalDebt(): number {
    let totalDebt: number = 0;

    if (this.data.length > 0) {
        this.data.map(payoff => {
            return payoff.payoff;
        }).forEach(payoff => {
            totalDebt += payoff;
        });
    }

    return totalDebt;
}
}