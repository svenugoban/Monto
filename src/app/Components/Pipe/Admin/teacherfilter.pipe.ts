import { Pipe, PipeTransform } from '@angular/core';
import { Teachdatalist } from '../../Model/Adminmodel/teachdatalist';


@Pipe({
  name: 'teacherfilter'
})
export class TeacherfilterPipe implements PipeTransform {

  transform(teachdatalist : Teachdatalist[], tsearchterm : string): Teachdatalist[] {
    if(!teachdatalist || !tsearchterm ){
      return teachdatalist;
    }
    
    return teachdatalist.filter(teacher => teacher.teacher_name.toLowerCase().indexOf(tsearchterm.toLowerCase()) !== -1);
    
  }

}
