import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
import { AssignInitialPipe } from 'src/app/SharedModule/assign-initial.pipe';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
months= ['jan','feb','march','april','may','june','july']
todaydate=new Date();
jsonValue={name:'Mayura',age:38,address:{city:'Bangalore',State:'Karnataka'}}
details: any;

det: any=[];
empid: number;
ID:number;
Name:string;
location:string;

filteredString: string = '';
filteredId: number ;

  constructor(private activate: ActivatedRoute, private router: Router, private _empService:EmployeeService) { }

  ngOnInit(): void {
    this._empService.getEmployees().subscribe(response=>{
      this.details=response; 
    })
    
  }
  
  

  public redirect(): void{
    this.router.navigate(['route',this.empid]);
  }


public getQueryParamData(): void{

  this.ID= +this.activate.snapshot.queryParamMap.get('ID');
  this.Name=this.activate.snapshot.queryParamMap.get('Name');
  console.log(this.activate.snapshot.queryParamMap.has('ID'));
  console.log(this.activate.snapshot.queryParamMap.keys);

}
}


// snapshot