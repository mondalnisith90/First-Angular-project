import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee-model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeesData: Employee[] = [];
  employee: Employee = {} as Employee;

  employeeFormData = {
    firstName: "",
    lastName: "",
    phone: ""
  }

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.fetchAllUserData();
  }

  fetchAllUserData(): void{
    this.employeeService.getAllUserData().subscribe((data)=>{
      console.log(data);
      this.employeesData = data;
    }, (error)=>{
      console.log(error);
    });
  }

  editButtonClick(employee: Employee): void{
    // alert(employee._id);
    this.employee = employee;
    this.employeeFormData = {
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      phone: this.employee.phone,
    }
  }

  saveChanges(employee: Employee, value: any): void{
    console.log(value);
    this.employeeService.updateUserData(employee, value).subscribe((data)=>{
      this.fetchAllUserData();
      alert("Data update successfully.");
    }, (error)=>{
      alert("User data not update, Error: "+error);
    });
  }

  deleteButtonClick(employee: Employee): void{
    const value = window.confirm("Are you sure to delete this user?");
    if(value){
      this.employeeService.deleteUser(employee._id).subscribe((data)=>{
        console.log("User deleted successfully");
        this.fetchAllUserData();
        console.log(data);
      }, (error)=>{
        console.log(error);
      });
    }
  }


  userDataUpdateFormSubmit(): void{
  }

}
