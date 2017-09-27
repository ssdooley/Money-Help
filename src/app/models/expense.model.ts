import { ExpenseData } from './expense-data.model';

export class Expense {
    id: number;
    name: string;
    data: Array<ExpenseData>;

    constructor() {
        this.data = new Array<ExpenseData>();
        this.data.push(new ExpenseData());
        this.data.push(new ExpenseData());
        this.data.push(new ExpenseData());
    }
}