import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTenantsDetailsComponent } from './add-tenants-details/add-tenants-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewTenantsDetailsComponent } from './view-tenants-details/view-tenants-details.component';
import { EditTenantsDetailsComponent } from './edit-tenants-details/edit-tenants-details.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'Home',
        component: HomePageComponent,
      },
      { path: 'AddTenant', component: AddTenantsDetailsComponent },
      {
        path: 'ViewTenants',
        component: ViewTenantsDetailsComponent,
      },
      { path: 'EditTenant', component: EditTenantsDetailsComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
