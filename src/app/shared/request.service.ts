import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  formRequestData : Request = new Request();

  requests : Request[];

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
      }
    )
  }


}
