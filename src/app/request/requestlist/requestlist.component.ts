import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/customer';
import { RequestService } from '../../shared/request.service';

@Component({
  selector: 'app-requestlist',
  templateUrl: './requestlist.component.html',
  styleUrls: ['./requestlist.component.scss']
})
export class RequestlistComponent implements OnInit {

  // customer : Customer;

  constructor(public requestService : RequestService) { }

  ngOnInit(): void {
    console.log("Welcome to request list");
    
    this.requestService.bindAllRequests();
    console.log(this.requestService.requests);
    
  }

}
