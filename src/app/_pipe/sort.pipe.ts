import { Pipe, PipeTransform } from '@angular/core';
import { NytimesService } from '../service/nytimes.service';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  constructor(private nytimesService: NytimesService) { }

  transform(value: any, args?: any): any {

    if (!value) return null;

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
    } else if (args === '') {
      return this.nytimesService.getNytimesData();
    }
    else {
      return value;
    }

  }
}
