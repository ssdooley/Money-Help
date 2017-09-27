import { Component } from '@angular/core';
import { BudgetService } from '../../services/budget.service';

@Component({
    selector: 'budget',
    templateUrl: 'budget.component.html',
    styleUrls: ['budget.component.css']
})
export class BudgetComponent{
    constructor(public budgetService: BudgetService) {

    }

    writeConsole(object) {
        console.log(object.value);
    }
}
