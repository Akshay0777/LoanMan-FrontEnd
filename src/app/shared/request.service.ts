import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Request } from './request';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  
  totalLoan : number = 0;


  formRequestData : Request = new Request();

  requests : Request[];

  pendingOfficerRequests : Request[];

  pendingAdminRequest : Request[];

  approvedRequests : Request[];

  assignOfficerRequests : Request[] = [];


  constructor(private httpClient : HttpClient) { }

  
  getAllRequests() : Observable<any>{
    return this.httpClient.get(environment.apiRequest);
  }



  bindAllRequests(){
    this.httpClient.get(environment.apiRequest)
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.requests = response as Request[];
        for (let i = 0; i < this.requests.length; i++) {
          if(this.requests[i].status == 2){
            this.totalLoan = this.requests[i].amount;
          }
        }
      }
    )
  }

  bindAssignOfficerRequests(){
    this.httpClient.get(environment.apiRequest)
    .toPromise()
    .then(
      (response)=>{
        console.log("Here is the pointer");
        
        console.log(response);
        this.bindAllRequests();
        this.requests = response as Request[];
        console.log(this.requests);
        
        for (let i = 0; i < this.requests.length; i++) {
          if(this.requests[i].officerId == 1){ // id 1 field officer is reserved (its itself admin)
            console.log(this.requests[i]);
            
            this.assignOfficerRequests.push(this.requests[i]);
          }
        }
      }
    )
  }

  bindAllOfficerPendingRequests(){
    this.httpClient.get(environment.apiRequest+'officerpending')
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.pendingOfficerRequests = response as Request[];
      }
    )
  }

  

  bindAllPendingAdminRequest(){
    this.httpClient.get(environment.apiRequest+'adminpending')
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.pendingAdminRequest = response as Request[];
      }
    )
  }

  bindApprovedRequest(){
    this.httpClient.get(environment.apiRequest+'adminpending')
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.approvedRequests = response as Request[];
      }
    )
  }

  


  updateRequest(request : Request){
    this.updateReq(request).subscribe((res:any) =>{
      console.log(res);
    },
    (err:any)=>{
      console.log(err);
    }
    )
  }

  updateReq(request : Request) : Observable<any>{
    return this.httpClient.put(environment.apiRequest, request);

  }


}
