import { Component, OnInit } from '@angular/core';
import { tenantDetails } from 'src/app/model/TenantDetails';
import { TenantServiceService } from 'src/app/services/tenant-service.service';

@Component({
  selector: 'app-view-tenants-details',
  templateUrl: './view-tenants-details.component.html',
  styleUrls: ['./view-tenants-details.component.css']
})
export class ViewTenantsDetailsComponent implements OnInit{
  tenantDetail:tenantDetails[]=[]
  constructor(private tenantSerivce:TenantServiceService){}
  ngOnInit(): void {
   this.tenantSerivce.GetAllTenatsDetails().subscribe({
    next:(res)=>{
      this.tenantDetail=res;
    }
   });
  }
  SaveId(id:number)
  {
    sessionStorage.setItem('id',id.toString());
  }
}
