import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service'
import {RequestService} from '../shared/request.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public customerService : CustomerService, public requestService : RequestService) { }

  ngOnInit(): void {
    // this.customerService.bindAllCustomers();
  }

}
