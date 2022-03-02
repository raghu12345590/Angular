import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
 emp:any=[];
 employees=[
   {id:1,name:'Mayura',location:'Pune'},
   {id:2,name:'Sam',location:'Pune'},
   {id:3,name:'Ankit',location:'Pune'},
   
 ]
 
  constructor() { }

  ngOnInit(): void {
  }

}
