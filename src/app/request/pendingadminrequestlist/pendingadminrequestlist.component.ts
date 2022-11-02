import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/customer';
import { Request } from 'src/app/shared/request';
import { CustomerService } from 'src/app/shared/customer.service';
import { FieldofficerService } from 'src/app/shared/fieldofficer.service';
import { RequestService } from 'src/app/shared/request.service';

@Component({
  selector: 'app-pendingadminrequestlist',
  templateUrl: './pendingadminrequestlist.component.html',
  styleUrls: ['./pendingadminrequestlist.component.scss']
})
export class PendingadminrequestlistComponent implements OnInit {

  tempCust : Customer = new Customer();

  constructor(public requestService : RequestService, public customerService : CustomerService,  public fieldofficerService : FieldofficerService) { }

  ngOnInit(): void {
    this.requestService.bindAllPendingAdminRequest();
  }


  adminApproved(request : Request){
    request.status = 2;
    this.requestService.updateRequest(request);
    this.requestService.bindAllPendingAdminRequest();
  }


  adminRejected(request : Request){
    request.status = 0;
    this.requestService.updateRequest(request);
    this.requestService.bindAllPendingAdminRequest();
  }

  

}
