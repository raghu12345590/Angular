import { Component } from "@angular/core";

@Component({
  selector: 'my-app',
  template:
  `<div><h1>{{pageTitle}}</h1>
        <div>my first component</div>
   </div>`     
})

export class AppComponent {
  pageTitle: string = 'product management';
}