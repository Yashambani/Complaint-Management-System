import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tenantDetails } from '../model/TenantDetails';

@Injectable({
  providedIn: 'root'
})
export class TenantServiceService {
  logInDetails:string='';
  apiURL:string='https://localhost:7296/api';
    constructor(private router:Router,private http:HttpClient) { }
    SaveTenatsDetails(tenant:tenantDetails):Observable<tenantDetails>
    {
     return this.http.post<tenantDetails>(`${this.apiURL}/Tenant/addTenants`,tenant);
    }
    GetAllTenatsDetails():Observable<tenantDetails[]>
    {
        return this.http.get<tenantDetails[]>(`${this.apiURL}/Tenant/viewTenants`);
    }
    GetTenatDetails(id:string):Observable<tenantDetails[]>
    {
        return this.http.get<tenantDetails[]>(`${this.apiURL}/Tenant/viewTenant/${id}`);
    }
    EditTenatsDetails(tenant:tenantDetails):Observable<tenantDetails>
    {
     return this.http.put<tenantDetails>(`${this.apiURL}/Tenant/updateTenant`,tenant);
    }
    DeleteTenatsDetails(id:string):Observable<string>
    {
     return this.http.delete<string>(`${this.apiURL}/Tenant/deleteTenant/${id}`);
    }
}
