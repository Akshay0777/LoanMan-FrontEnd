import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fieldofficer } from './fieldofficer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FieldofficerService {

  totalOfficer : number = 0;

  fieldOfficers : Fieldofficer[] = [];



  constructor(private httpClient : HttpClient) { }


  bindAllFieldOfficers(){
    this.httpClient.get(environment.apiOfficer)
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.fieldOfficers = response as Fieldofficer[];
        this.totalOfficer = this.fieldOfficers.length;
      }
    )
  }

  getOfficerId(id : number){
    for (let i = 0; i < this.fieldOfficers.length; i++) {
      if(this.fieldOfficers[i].officerId == id){
        return this.fieldOfficers[i];
      }
    }
  }


}
