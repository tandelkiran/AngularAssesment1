import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any, field: string, flag: boolean): any[] {

    if (!Array.isArray(array)) {
      return;
    }

    array.sort((a: any, b: any) => {
        return a[field] > b[field] ? -1 : 1;
    });
    if (!flag) {
      return array.reverse();
    }
    return array;
  }
}
