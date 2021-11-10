import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user-model';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private userService: UserService){

  }

  users: User[] = [];
  selectedUser: User = {} as User;

  ngOnInit():void{
    // this.users = this.userService.getUserData();
    this.userService.getUsers().subscribe((data)=>{
      this.users = data;
    });

  }



}
