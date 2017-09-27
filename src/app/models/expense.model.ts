import { ExpenseData } from './expense-data.model';

export class Expense {
    id: number;
    name: string;
    data: Array<ExpenseData>;
    numbers: Array<number>;

    constructor() {
        this.data = new Array<ExpenseData>();
        this.data.push(new ExpenseData());
        this.data.push(new ExpenseData());
        this.data.push(new ExpenseData());

        this.numbers = [
            2, 4, 6, 8, 10, 12
        ];

        this.numbers.map(n => {
            return n * n;
        }).forEach(n => {
            console.log(n);
        });
    }

    get total(): number {
        let total: number = 0;

        if (this.data.length > 0) {
            this.data.map(expense => {
                return expense.expense;
            }).forEach(expense => {
                total += expense;
            });
        }

        return total;
    }
}