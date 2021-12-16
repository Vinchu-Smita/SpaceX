import { Pipe, PipeTransform } from '@angular/core';

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
@Pipe({
  name: 'datatime'
})
export class DatatimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value != null) {
      const date = new Date(value);
      const day = date.getDate();
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      return `${month} ${day} ${year}`;
    } else return null;
  }


}
