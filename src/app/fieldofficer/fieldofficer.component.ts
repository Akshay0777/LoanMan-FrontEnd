import { Component, OnInit } from '@angular/core';
import {RequestService} from '../shared/request.service'

@Component({
  selector: 'app-fieldofficer',
  templateUrl: './fieldofficer.component.html',
  styleUrls: ['./fieldofficer.component.scss']
})
export class FieldofficerComponent implements OnInit {

  constructor(public requestService : RequestService) { }

  ngOnInit(): void {
    
    
  }

}
