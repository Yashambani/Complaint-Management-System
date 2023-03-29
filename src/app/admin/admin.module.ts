import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginModule } from '../login/login.module';
import { AddTenantsDetailsComponent } from './add-tenants-details/add-tenants-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewTenantsDetailsComponent } from './view-tenants-details/view-tenants-details.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddTenantsDetailsComponent,
    HomePageComponent,
    ViewTenantsDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LoginModule,
    FormsModule
  ]
})
export class AdminModule { }
