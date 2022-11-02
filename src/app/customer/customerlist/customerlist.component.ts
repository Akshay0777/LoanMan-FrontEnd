import { Component, OnInit } from '@angular/core';
import { AdminComponent } from 'src/app/admin/admin.component';
import { CustomerService } from '../../shared/customer.service'

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {

  constructor(public customerService : CustomerService, public adminComponent : AdminComponent) { }

  ngOnInit(): void {
    console.log("Welcome to customer list");
    
    console.log(this.customerService.customers);
    

    
    
  }

}
