import { Request } from "./request";

export class Customer {
    custId : number = 0;
    custName : string = "";
    password : string = "";
    email : string = "";
    phone : number = 0;
    panCard : string = "";
    adharCard : number = 0;
    salary : number = 0;
    address : string = "";
    isLimitExceed : number = 1;
    requests : Request[];
    active : boolean = false;
    rating : number = 0;

}
