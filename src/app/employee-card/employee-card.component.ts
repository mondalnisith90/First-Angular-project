import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee-model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input() employee: Employee = {} as Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
