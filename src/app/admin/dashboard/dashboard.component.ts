import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  pageLinks:string[]=['Home','Tenants','Complaint Solvers'];
  constructor(private router:Router, private loginservice:LoginServiceService){
    this.loginservice.checkLoginSession();
  }
  redirectTo(i:string)
  {
    if(i==this.pageLinks[0])
    this.router.navigate(['dashboard']);
  }
LogOut()
{
 this.loginservice.LogOut();
}
}
