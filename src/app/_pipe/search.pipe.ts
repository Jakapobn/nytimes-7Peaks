import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})

export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {

    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value ? value.filter(item => {
      if (item.title) {
        return item.title.search(new RegExp(args, 'i')) > -1
      } else {
        return [];
      }
    }) : [];
  }

  // return value.filter(function (item) {
  //   return JSON.stringify(item.name).toLowerCase().includes(args);
  // });

}