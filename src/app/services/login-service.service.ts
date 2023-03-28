import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/model/login';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
logInDetails:string='';
apiURL:string='https://localhost:7296/api';
  constructor(private router:Router,private http:HttpClient) { }
  checkLoginSession()
  {
    if(!sessionStorage.getItem('username'))
    {
      this.router.navigate(['login']);
    }
  }
  checkLogInDetails(login:Login):Observable<Login>
  {
        return this.http.post<Login>(`${this.apiURL}/LogIn`,login);
  }
  LogOut()
{
  sessionStorage.clear();
  this.router.navigate(['login']);
}
}
