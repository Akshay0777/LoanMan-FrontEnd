import { Request } from "./request";

export class Fieldofficer {
    officerId : number = 0;
    name : string = "";
    password : string = "";
    email : string = "";
    phone : number = 0;
    rating : number = 5;
    requests : Request[] = [];
    active : boolean = false;
}
