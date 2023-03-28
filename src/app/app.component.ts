import { Component,OnInit } from '@angular/core';
import { LoginServiceService } from './services/login-service.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CMS.UI';
  constructor(private logInService:LoginServiceService,private router:Router){
       
  }
  ngOnInit(): void {
    if(!sessionStorage.getItem('username'))
        {
          this.router.navigate(['login']);
        }
  }

}
