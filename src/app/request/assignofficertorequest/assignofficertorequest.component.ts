import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { FieldofficerService } from 'src/app/shared/fieldofficer.service';
import { Request } from 'src/app/shared/request';
import { RequestService } from 'src/app/shared/request.service';

@Component({
  selector: 'app-assignofficertorequest',
  templateUrl: './assignofficertorequest.component.html',
  styleUrls: ['./assignofficertorequest.component.scss']
})
export class AssignofficertorequestComponent implements OnInit {

  selectedOfficer : number = 0;
  errorOffice : string = ""

  constructor(public customerService : CustomerService, public requestService : RequestService, public fieldofficerService : FieldofficerService) { }

  ngOnInit(): void {
    this.requestService.bindAllRequests();
    this.requestService.bindAssignOfficerRequests();
    this.fieldofficerService.bindAllFieldOfficers();
  }

  assignOfficer(request : Request){
    if(this.selectedOfficer != 0){
      this.errorOffice = "";
      request.officerId = this.selectedOfficer;
      this.requestService.updateRequest(request);
      this.requestService.bindAssignOfficerRequests();
    }
    else{
      this.errorOffice = "Select officer"
    }
  }

}
