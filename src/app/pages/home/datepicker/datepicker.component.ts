import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { RequestTranslateService } from '../../../services/request-translate.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class DatepickerComponent implements OnInit {
  @Input('dateType') componentDate: string;
  @Input() label: string;
  @Output() selectedDate = new EventEmitter<any>();

  startDate = new Date();

  event: string;
  dateObject = {};

  constructor() { }

  ngOnInit() { }

  dateChange(event: MatDatepickerInputEvent<Date>) {
    this.dateObject['dateType'] = this.componentDate;
    this.dateObject['dateValue'] = event.value;
    this.selectedDate.emit(this.dateObject);
  }

}
