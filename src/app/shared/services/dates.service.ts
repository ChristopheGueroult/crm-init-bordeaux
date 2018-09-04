import { Injectable } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  constructor(
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) { }

  public dateToIso(arg: any): void {
    arg = new Date(arg.year, arg.month - 1, arg.day);
    return arg.toISOString();
  }

  public dateIsoToDapicker(date: string) {
    return {
      year: new Date(date).getFullYear(),
      month: new Date(date).getMonth() + 1,
      day: new Date(date).getDate(),
    };
  }

  public dateOfTheDay() {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    };
  }
}
