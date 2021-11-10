import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user-model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Input() selectedUser: User = {} as User;

  constructor() { }

  ngOnInit(): void {
  }

  public isNotEmpty():boolean{
    return Object.keys(this.selectedUser).length>0;
  }

}
