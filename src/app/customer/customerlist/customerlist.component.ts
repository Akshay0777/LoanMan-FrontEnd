import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/customer.service'

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {

  constructor(public customerService : CustomerService) { }

  ngOnInit(): void {
    console.log("Welcome to customer list");
    
    this.customerService.bindAllCustomers();
    console.log(this.customerService.customers);
    
  }

}
