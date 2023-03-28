import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantRoutingModule } from './tenant-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TenantRoutingModule,
    LoginModule
  ]
})
export class TenantModule { }
