import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user-model';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})


export class UserCardComponent implements OnInit {

  users: User[] = [];
  @Output() sendUser = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data)=>{
      this.users = data;
    });
  }

  public userRowClick(user: User): void{
    this.sendUser.emit(user);
  }

}
