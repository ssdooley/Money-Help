import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppMaterialModule } from './app.material.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidepanelService } from './services/sidepanel.service';
import { BudgetService } from './services/budget.service';

import { AppComponent } from './components/app/app.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';
import { HomeComponent } from './components/home/home.component';
import { BudgetComponent } from './components/budget/budget.component';
import { DebtComponent } from './components/debt/debt.component';
import { ExpensesComponent } from './components/budget/expenses.component';



@NgModule({
  declarations: [
    AppComponent,
    SidepanelComponent,
    HomeComponent,
    BudgetComponent,
    ExpensesComponent,
    DebtComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppMaterialModule,
    FlexLayoutModule,
    RouterModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'budget', component: BudgetComponent},
      { path: 'debt', component: DebtComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [
    SidepanelService,
    BudgetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
