import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path:'login',loadChildren:()=>import('./login/login.module').then(mod=>mod.LoginModule)
  }
  ,
  {
    path:'tenant',loadChildren:()=>import('./tenant/tenant.module').then(mod=>mod.TenantModule)
  },
  {
    path:'complaint solver',loadChildren:()=>import('./complaint-solver/complaint-solver.module').then(mod=>mod.ComplaintSolverModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
