import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-route-parameter',
  templateUrl: './route-parameter.component.html',
  styleUrls: ['./route-parameter.component.scss']
})
export class RouteParameterComponent implements OnInit {
 Id:number;
 Name:string;
  constructor(private activate: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.activate.paramMap.subscribe((p:ParamMap)=>{
      this.Id=+p.get('id');
    })
  }

  public QueryParam()
  {
    this.router.navigate(['employee'],{queryParams:{Id:345,Name:'Mayura'}})
  }
}
