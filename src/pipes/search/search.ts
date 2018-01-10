import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from "@angular/core";

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Injectable()
@Pipe({
  name: 'search',
  pure: true
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], searchTerm: string): any[] {
    if (searchTerm) {
      searchTerm = searchTerm.toUpperCase();
      return list.filter(item => {
        return (item.nombre.toUpperCase().indexOf(searchTerm) !== -1)
      });
    } else {
      return list;
    }
  }
}
