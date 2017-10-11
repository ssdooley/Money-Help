import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/behaviorsubject';
import { Observable } from 'rxjs/Observable';
import { Income } from '../models/income.model';
import { Debt } from '../models/debt.model';
import { DebtData } from '../models/debt-data.model';
import { Expense } from '../models/expense.model';
import { ExpenseData } from '../models/expense-data.model';
import 'rxjs/add/observable/of';

@Injectable()
export class BudgetService {
    finances = new Income();
    expdata = new Expense();
    debtdata = new Debt();
    extraPay: number;
    incomeTypes = [
        'Monthly',
        'Bi-Weekly',
        'Weekly',
        'Yearly'
    ];

    add_expense() {
        this.expdata.data.push(new ExpenseData());
    }

    delete_expense(index: number) {
        this.expdata.data.splice(index, 1);
    }

    add_debt() {
        this.debtdata.data.push(new DebtData());
    }

    delete_debt(index: number) {
        this.debtdata.data.splice(index, 1);
    }

    getExtraPay() {
        const sortedData = this.debtdata.data.sort((a, b) => {
            return a.payoff > b.payoff ? 1 : -1;
        });

        sortedData.forEach(d => {
            if (sortedData.indexOf(d) === 0) {
                d.extraPayment = this.debtdata.availMonthly + d.minPayment;
            } else {
                d.extraPayment = d.minPayment;
            }
        });
    }
}
