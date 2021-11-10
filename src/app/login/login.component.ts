import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  serverError: string = "";
  login = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }


  loginFormSubmit():void{
    this.employeeService.userLogin(this.login.value).subscribe((data)=>{
      alert("Login Succesfull.");
      console.log(data);
      this.login.reset();
      this.serverError = "";
    }, (error)=>{
      this.serverError = error;
    });
  }

}
