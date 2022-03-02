import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../Models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empDetails: Employee[];


  constructor() {
    this.empDetails=[
      new Employee(1,'Mayura','Pune','Female',true),
      new Employee(2,'Sam','Mumbai','Male',false),
      new Employee(3,'Swati','Hyderabad','Female',false),
      new Employee(4,'John','Odissa','Male',true),
      new Employee(5,'Amit','Delhi','Male',true),
    ]
   }

   public getEmployees(): Observable<Employee[]>{
     return of(this.empDetails);
   }

   public getEmployeeById(id: number):Observable<Employee>{

    const emp=this.empDetails.find(x=>x.id==id);
    return of(emp);
   }
}
