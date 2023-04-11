import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { tenantDetails } from 'src/app/model/TenantDetails';
import { unitDetails } from 'src/app/model/UnitDetails';
import { userType } from 'src/app/model/UserType';
import { TenantServiceService } from 'src/app/services/tenant-service.service';
import { UnitService } from 'src/app/services/unit.service';
@Component({
  selector: 'app-edit-tenants-details',
  templateUrl: './edit-tenants-details.component.html',
  styleUrls: ['./edit-tenants-details.component.css'],
})
export class EditTenantsDetailsComponent implements OnInit {
  unit: unitDetails[] = [];
  firstName = new FormControl('',[Validators.required]);
  lastName = new FormControl('',[Validators.required]);
  unitNumber = new FormControl(0,[Validators.required]);
  email = new FormControl('',[Validators.required]);
  contactNumber = new FormControl('',[Validators.required,Validators.min(999999999),Validators.max(9999999999)]);
  gender = new FormControl('',[Validators.required]);
  tenantDetail: tenantDetails = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    contactNumber: '',
    unitNumber: 0,
  };
  editForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    unitNumber: this.unitNumber,
    email: this.email,
    contactNumber: this.contactNumber,
    gender: this.gender,
  });
  constructor(
    private tenantSerivce: TenantServiceService,
    private unitService: UnitService,
    private route: ActivatedRoute
  ) {
    this.unitService.GetUnitDetails().subscribe({
      next: (res) => {
        this.unit = res;
      },
    });
  }
  ngOnInit(): void {
    const id = sessionStorage.getItem('id');
    if (id) {
      this.tenantSerivce.GetTenatDetails(id).subscribe({
        next: (res) => {
          this.tenantDetail = res[0];
          this.UpdateFormControlValues();
        },
      });
    }
    sessionStorage.removeItem('id');
  }
  EditTenantsDetails() {
   
   this.UpdateTenantDetails();
    this.tenantSerivce.EditTenatsDetails(this.tenantDetail).subscribe({
      next: (res) => {
        alert('Tenant Updated Successfully');
      },
    });
  }
  UpdateTenantDetails()
  {if(this.firstName.value)
    this.tenantDetail.firstName=this.firstName.value;
    if(this.lastName.value)
    this.tenantDetail.lastName=this.lastName.value;
    if(this.gender.value)
    this.tenantDetail.gender=this.gender.value;
    if(this.unitNumber.value)
    this.tenantDetail.unitNumber=this.unitNumber.value;
    if(this.email.value)
    this.tenantDetail.email=this.email.value;
    if(this.contactNumber.value)
    this.tenantDetail.contactNumber=this.contactNumber.value;
  }
  UpdateFormControlValues()
  {
    this.updateFirstName(this.tenantDetail.firstName);
    this.updateLastName(this.tenantDetail.lastName);
    this.updateContactNumber(this.tenantDetail.contactNumber);
    this.updateEmail(this.tenantDetail.email);
    this.updateGender(this.tenantDetail.gender);
    this.updateUnitNumber(this.tenantDetail.unitNumber);
  }
  updateFirstName(firstName:string)
  {
    this.firstName.setValue(firstName);
  }
  updateLastName(lastName:string)
  {
    this.lastName.setValue(lastName);
  }
  updateContactNumber(contactNumber:string)
  {
    this.contactNumber.setValue(contactNumber);
  }
  updateUnitNumber(unitNumber:number)
  {
    this.unitNumber.setValue(unitNumber);
  }
  updateEmail(email:string)
  {
    this.email.setValue(email);
  }
  updateGender(gender:string)
  {
    this.gender.setValue(gender);
  }

}
