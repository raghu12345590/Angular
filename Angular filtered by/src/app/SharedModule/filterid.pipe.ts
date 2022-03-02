import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterid'
})
export class FilteridPipe implements PipeTransform {

  transform(value: any, filteredId: number) {
    if(value.length === 0 || filteredId == null) {
      return value;
    }
    const details = [];
  
    for(const employees of value) {
      if(employees['id']==filteredId){
        details.push(employees);
        console.log(details);
      }
    }
    return details;
  }
  }


