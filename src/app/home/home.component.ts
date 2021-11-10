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

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllUserData().subscribe((data)=>{
      console.log(data);
      this.employeesData = data;
    }, (error)=>{
      console.log(error);
    });
  }

}
