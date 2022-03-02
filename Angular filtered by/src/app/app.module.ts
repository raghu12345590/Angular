import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { HomeComponent } from './Components/home/home.component';
import { SwitchComponent } from './Components/switch/switch.component';
import { LoginComponent } from './Components/login/login.component';
import { MenuComponent } from './Components/menu/menu.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { RouteParameterComponent } from './Components/route-parameter/route-parameter.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { CustomerDetailsComponent } from './Components/customer-details/customer-details.component';
import { EditCustomerComponent } from './Components/edit-customer/edit-customer.component';
import { AssignInitialPipe } from './SharedModule/assign-initial.pipe';
import { FilterpipePipe } from './SharedModule/filterpipe.pipe';
import { FilteridPipe } from './SharedModule/filterid.pipe';
//import { AssignFilter } from './SharedModule/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddCustomerComponent,
    AddEmployeeComponent,
    EmployeeComponent,
    CustomerComponent,HomeComponent,
    LoginComponent,
    MenuComponent,
    CustomerDetailsComponent,
    PageNotFoundComponent,SwitchComponent,
    EmployeeDetailsComponent,
    RouteParameterComponent,
     EditCustomerComponent, 
     AssignInitialPipe,
     FilterpipePipe,
     FilteridPipe
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
