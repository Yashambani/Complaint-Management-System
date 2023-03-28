import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintSolverRoutingModule } from './complaint-solver-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginModule } from '../login/login.module';
LoginModule

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ComplaintSolverRoutingModule,
    LoginModule
  ]
})
export class ComplaintSolverModule { }
