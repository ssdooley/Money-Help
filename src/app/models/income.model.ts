export class Income {
    income: number;
    incomeType: string;
    payPeriod: string;

    constructor() {
        this.income = 0;
    }

    get monthly(): number {
        switch (this.payPeriod) {
            case "Bi-Weekly": {
                return (this.income * 26) / 12;
            }
            case "Weekly": {
                return (this.income * 52) / 12;
            }
            case "Yearly": {
                return (this.income / 12);
            }
            default: {
                return this.income;
            }
        }
    }

    get yearly(): number {
        return this.monthly * 12;
    }
}