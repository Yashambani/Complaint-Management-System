import { unitDetails } from "./UnitDetails"

export interface tenantDetails{
    id:number,
    firstName:string,
    lastName:string,
    contactNumber:number | string,
    email:string,
    gender:string,
    units:unitDetails
}