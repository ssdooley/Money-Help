import { Component, OnInit, Inject } from '@angular/core';
import { BudgetService } from '../../services/budget.service';

@Component({
    selector: 'expenses',
    templateUrl: 'expenses.component.html',
    styleUrls: ['expenses.component.css'],
    providers: [
        BudgetService
    ]
})
export class ExpensesComponent {
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
