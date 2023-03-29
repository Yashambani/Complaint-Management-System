import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { unitDetails } from '../model/UnitDetails';
@Injectable({
  providedIn: 'root'
})
export class UnitService {

  logInDetails:string='';
  apiURL:string='https://localhost:7296/api';
    constructor(private router:Router,private http:HttpClient) { }
    GetUnitDetails():Observable<unitDetails[]>
    {
     return this.http.get<unitDetails[]>(`${this.apiURL}/Unit`);
    }
}
