import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/Forms';

import { Customer } from './customer';

// function ratingRange(c: AbstractControl): {[key:string]: boolean} | null{
//   if(c.value !== null && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
//     return { 'range': true};
//   }
//   return null;
// }

function emailMatcher(c: AbstractControl): {[key: string]: boolean } | null{
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if(emailControl.pristine || confirmControl.pristine){
    return null;
  }

  if(emailControl.value === confirmControl.value) {
    return null;
  }
  return { 'match': true};
}

function ratingRange(min: number, max: number): ValidatorFn{
return (c: AbstractControl): {[key:string]: boolean} | null => {
  if(c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
    return { 'range': true};
  }
  return null;
};
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true)
    // });
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['',[Validators.required, Validators.email]],
        confirmEmail: ['',Validators.required],
      },{validator: emailMatcher}),
      phone: '',
      notification: 'email',
      rating: [null, ratingRange(1, 5)],
      sendCatalog: true
    });
  }

  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Raghu',
      lastName: 'KS',
      email: 'raghu@gmail.com',
      sendCatalog: false
    });
  }

  

  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  setNotification(notifyVia: string): void{
    const phoneControl = this.customerForm.get('phone');
    this.customerForm.controls['phone'].value
    if(notifyVia === 'text')
    {
      phoneControl.setValidators(Validators.required);
    }else{
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }
}
