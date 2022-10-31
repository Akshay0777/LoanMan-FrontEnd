import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  formCustomerData : Customer = new Customer();

  customers : Customer[];

  constructor(private httpClient : HttpClient) { }

  getAllCustomers() : Observable<any>{
    return this.httpClient.get(environment.apiCustomer);
  }

  bindAllCustomers(){
    this.httpClient.get(environment.apiCustomer)
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.customers = response as Customer[]
      }
    )
  }


}
