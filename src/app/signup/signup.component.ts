import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  serverError: string = "";

  signup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("",  [Validators.required]),
    phone: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  });

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  signupFormSubmit():void{
    this.serverError="";
    if(this.signup.valid){
      this.employeeService.userSignup(this.signup.value).subscribe((data)=>{
        console.log(data);
        alert("Registration succesfull");
        this.signup.reset();
      }, (error)=>{
        this.serverError = error;
      });
    }else{
      alert("Please fill input fields properly.");
    }
  }

}
