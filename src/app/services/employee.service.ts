import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Employee } from '../models/employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   rootServerUrl: string = "http://localhost:8000/users/";

  constructor(private httpClient: HttpClient) { }

  userSignup(data: any): Observable<any> {
    console.log(data);

    return this.httpClient.post<any>(this.rootServerUrl + "signup", data).pipe(
      catchError(this.handelError)
    );
  }

  userLogin(data: any): Observable<any>{
    return this.httpClient.post<any>(this.rootServerUrl+"login", data).pipe(
      catchError(this.handelError)
    )
  }

  getAllUserData(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.rootServerUrl+"all").pipe(
      catchError(this.handelError)
    );
  }

  updateUserData(employee: Employee, data: any): Observable<any>{
    return this.httpClient.put(this.rootServerUrl+"update/"+employee._id, data).pipe(
      catchError(this.handelError)
    );
  }

  deleteUser(employeeId: string): Observable<any>{
    return this.httpClient.delete(this.rootServerUrl+"remove/"+employeeId);
  }



  handelError(error: HttpErrorResponse){
    return throwError(error.error);
  }

}
