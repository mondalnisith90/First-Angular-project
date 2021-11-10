import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

interface Signup{
  name: string,
  phone: string,
  email: string,
  password: string
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerFormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    email: new FormControl("",  [Validators.required, Validators.email]),
    password: new FormControl("",  [Validators.required])
  });


  constructor() { }

  ngOnInit(): void {
  }

  get name(){
    console.log("hello all...")
    console.log(this.registerFormGroup.get('name'))
    return this.registerFormGroup.get('name');
  }

  get phone(){
    return this.registerFormGroup.get('phone');
  }

  get email(){
    return this.registerFormGroup.get('email');
  }

  get password(){
    return this.registerFormGroup.get('password');
  }


  public signupFormSubmit(): void{
    // console.log(this.registerFormGroup.value);
  }

}
