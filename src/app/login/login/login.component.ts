import { Component } from '@angular/core';
import { Route,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Login } from 'src/app/model/login';
import { userType } from 'src/app/model/UserType';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userType:userType={id:0,Type:''};
  correctDetails:boolean=true;
  errorMessage='';
  login:Login={
    username:'',
    password:'',
    type:''
  };
  constructor(private router:Router,private logInService:LoginServiceService){
    if(sessionStorage.getItem('username'))
    {
      this.router.navigate([sessionStorage.getItem('type'),'dashboard']);
    }
  }
SaveLogInDetails()
{
  this.logInService.checkLogInDetails(this.login).subscribe({
    next:(resp)=>{
      if(resp)
      sessionStorage.setItem('username',this.login.username);
      sessionStorage.setItem('type',this.login.type.toLowerCase());
      this.router.navigate([`${this.login.type.toString().toLowerCase()}`,'dashboard','Home']);
    },
    error:(res)=>
    {
      if(res.status===404)
      {
        this.correctDetails=false;
        this.errorMessage='invalid username or password';
      }
    }
  });
}
}
