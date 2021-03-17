import { Pipe, PipeTransform } from '@angular/core';
import { Studdatalist } from '../../Model/ATcommon/studdatalist';

@Pipe({
  name: 'studentfilter'
})
export class StudentfilterPipe implements PipeTransform {

  transform(studdatalist: Studdatalist[], searchterm : string) : Studdatalist[]{
    if(!studdatalist || !searchterm){
      return studdatalist;
    }

    return studdatalist.filter(student => student.studentname.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1);
  }

}
