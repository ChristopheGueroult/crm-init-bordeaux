import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      // console.log(value, args);
      args = args.toLowerCase();
      return value ? value.filter(item => item.client.toLowerCase().indexOf(args) !== -1) : value;
    }
  }

}
