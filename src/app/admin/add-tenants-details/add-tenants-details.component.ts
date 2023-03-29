import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tenantDetails } from 'src/app/model/TenantDetails';
import { unitDetails } from 'src/app/model/UnitDetails';
import { TenantServiceService } from 'src/app/services/tenant-service.service';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'app-add-tenants-details',
  templateUrl: './add-tenants-details.component.html',
  styleUrls: ['./add-tenants-details.component.css']
})
export class AddTenantsDetailsComponent {
tenantDetail:tenantDetails={
  id:0,
  firstName:'',
  lastName:'',
  email:'',
  gender:'',
  contactNumber:'',
  units:{id:0,unitNumber:0}
};
unit:unitDetails[]=[];
formTextFields:string[]=['FirstName','LastName','PhoneNumber','Email'];

constructor(private tenantSerivce:TenantServiceService,private unitService:UnitService){
  this.unitService.GetUnitDetails().subscribe({
    next:(res)=>{
      this.unit=res;
    }
  })
}
SaveDetails(form:NgForm)
{
  this.tenantSerivce.SaveTenatsDetails(this.tenantDetail).subscribe({
    next:(res)=>
    { alert("Tenant Inserted Successfully");
     form.reset();
  }
  });
}
}
