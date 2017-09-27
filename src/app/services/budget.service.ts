import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/behaviorsubject';
import { Observable } from 'rxjs/Observable';
import { Income } from '../models/income.model';
import { Debt } from '../models/debt.model';
import { Expense } from '../models/expense.model';
import { ExpenseData } from '../models/expense-data.model';
import 'rxjs/add/observable/of';

@Injectable()
export class BudgetService {
    payPeriod: string;
    monthlyIncome: number;
    yearlyIncome: number;
    income = new BehaviorSubject<number>(0);
    expdata = new Expense();
    incomeTypes = [
        "Monthly",
        "Bi-Weekly",
        "Weekly",
        "Yearly"
    ];

    constructor() {
        this.income.subscribe(income => {
            this.calcIncome();

        })
    }

    calcIncome() {
        this.calcmonthlyIncome();
        this.calcyearlyIncome();
    }

    calcmonthlyIncome() {
        switch (this.payPeriod) {
            case "Bi-Weekly": {
                this.monthlyIncome = (this.income.value * 26) / 12;
                break;
            }
            case "Monthly": {
                this.monthlyIncome = this.income.value;
                break;
            }
            case "Weekly": {
                this.monthlyIncome = (this.income.value * 52) / 12;
                break;
            }
            case "Yearly": {
                this.monthlyIncome = (this.income.value / 12);
                break;
            }
            default: {
                this.monthlyIncome = this.income.value;
                break;
            }
        }
    }

    calcyearlyIncome() {
        this.yearlyIncome = (this.monthlyIncome * 12);
    }

    add_expense() {
        this.expdata.data.push(new ExpenseData());
    }

    delete_expense(index: number) {
        this.expdata.data.splice(index, 1);
    }


}