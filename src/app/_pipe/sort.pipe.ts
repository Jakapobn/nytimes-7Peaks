import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value) return null;
    if (!args) return value;

    let result: any;

    if (args === 'Firstly') {
      result = value.sort((a, b) => {
        if (a.updated_date < b.updated_date) {
          return -1;
        } else if (a.updated_date > b.updated_date) {
          return 1;
        } else {
          return 0;
        }
      })

      return result;

    } else if (args === 'Latest') {
      result = value.sort((a, b) => {
        if (a.updated_date > b.updated_date) {
          return -1;
        } else if (a.updated_date < b.updated_date) {
          return 1;
        } else {
          return 0;
        }
      })

      return result;
    } else {
      return value;
    }

  }
}
