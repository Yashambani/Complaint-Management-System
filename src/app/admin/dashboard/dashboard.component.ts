import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router, private loginservice:LoginServiceService){
    this.loginservice.checkLoginSession();
  }
LogOut()
{
 this.loginservice.LogOut();
}
}
