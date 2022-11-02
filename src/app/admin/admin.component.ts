import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service'
import {RequestService} from '../shared/request.service'
import {FieldofficerService} from '../shared/fieldofficer.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  

  constructor(public customerService : CustomerService, public requestService : RequestService, public fieldofficerService : FieldofficerService) { }

  ngOnInit(): void {
    
    this.customerService.bindAllCustomers();

    this.requestService.bindAllRequests();

    this.fieldofficerService.bindAllFieldOfficers();

  }



}
