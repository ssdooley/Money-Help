import { Component } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Debt } from '../../models/debt.model';

@Component({
    selector: 'debt',
    templateUrl: 'debt.component.html',
    styleUrls: ['debt.component.css']
})
export class DebtComponent {
    positions: Array<string>;
    position: string;
    constructor(public budgetService : BudgetService) {
        this.positions = [
            'before',
            'after',
            'above',
            'below',
            'left',
            'right'
        ];
        this.position = this.positions[1];
    }
}