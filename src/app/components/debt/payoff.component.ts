import { Component } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Debt } from '../../models/debt.model';

@Component({
    selector: "payoff",
    templateUrl: "payoff.component.html",
    styleUrls: ["payoff.component.css"]
})
export class PayoffComponent {
    constructor(public budgetService : BudgetService) {}
}