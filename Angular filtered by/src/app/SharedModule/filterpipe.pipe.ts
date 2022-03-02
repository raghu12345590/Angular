import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if(value.length === 0 || filteredString === '') {
      return value;
    }
    const details = [];
  
    for(const employees of value) {
      if(employees['name']==filteredString){
        details.push(employees);
        console.log(details);
      }
    }
    return details;
  }

}
