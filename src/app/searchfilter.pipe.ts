import { Pipe, PipeTransform } from '@angular/core';
import {CountryReports} from '../countryReports'

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(ELEMENT_DATA: CountryReports[], searchValue: string): CountryReports[] {
    if(!ELEMENT_DATA || !searchValue){
      return ELEMENT_DATA;
    }
    return ELEMENT_DATA.filter(CountryReports => 
      CountryReports.country.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
