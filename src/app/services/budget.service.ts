import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/behaviorsubject';
import { Observable } from 'rxjs/Observable';
import { Income } from '../models/income.model';
import { Debt } from '../models/debt.model';
import { DebtData } from '../models/debt-data.model';
import { Expense } from '../models/expense.model';
import { ExpenseData } from '../models/expense-data.model';
import { MonthlyBalance } from '../models/monthly-balance';
import { MonthlyCalcs } from '../models/monthly-calcs';
import 'rxjs/add/observable/of';

@Injectable()
export class BudgetService {
    finances = new Income();
    expdata = new Expense();
    debtdata = new Debt();
    extraPay: number;
    monthlyDebtTotal: number;
    payoffCounter: number;
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
        this.debtdata.monthlyData = [];
        this.debtdata.monthlyArray = [];
        const sortedData = this.debtdata.data.sort((a, b) => {
            return a.payoff > b.payoff ? 1 : -1;
        });

        sortedData.forEach(d => {
            if (sortedData.indexOf(d) === 0) {
                d.extraPayment = this.debtdata.availMonthly + d.minPayment;
            } else {
                d.extraPayment = d.minPayment;
            }

            this.calculateMonthlyBalance(d);
        });
        this.pushMonthlyArray();
    }

    pushMonthlyArray() { 
        for (var i=0; i < 2; ++i){
        this.debtdata.monthlyArray.push(new MonthlyBalance);
        }
    }

    calculateMonthlyBalance(d: DebtData) {
        const month = new MonthlyBalance();
        month.additionalPayment = d.extraPayment;
        month.apRate = d.apr;
        month.debtName = d.debtType;
        month.newPayoff = d.payoff;
        month.interest = (d.apr / 1200) * d.payoff;
        month.balance = (d.payoff - d.extraPayment) + month.interest;
        month.newPayoff = month.balance;
        this.debtdata.monthlyData.push(month);
       
    }    

    calculatePayoff(d: DebtData) {
        if(d.remainingBalance < 0){
            d.remainingBalance = 0
        }
        this.monthlyDebtTotal = d.remainingBalance += d.remainingBalance
        do {
            this.calculateMonthlyBalance(d);
        } while (this.monthlyDebtTotal > 0);
    }
    getPaymentSum(d: DebtData) {
        const balances = this.debtdata.monthlyData.map(d => {
            return d.balance;
        });

        return balances.reduce(function (a, b) { return a + b; });
    }
}
