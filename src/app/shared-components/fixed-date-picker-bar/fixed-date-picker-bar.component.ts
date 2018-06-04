import { Component,
         OnInit,
         AfterViewInit,
         HostListener,
         ViewChild,
         ElementRef,
         Input,
         AfterViewChecked } from '@angular/core';
import { RequestTranslateService } from '../../services/request-translate.service';

@Component({
  selector: 'fixed-date-picker-bar',
  templateUrl: './fixed-date-picker-bar.component.html',
  styleUrls: ['./fixed-date-picker-bar.component.scss']
})
export class FixedDatePickerBarComponent implements OnInit, AfterViewInit, AfterViewChecked {
  arriveLabel = 'Data de chegada';
  departureLabel = 'Data de partida';
  bookingText = 'RESERVAR';
  arrivalErrorMessage = 'Selecione uma data de chegada';
  departureErrorMessage = 'Selecione uma data de partida';

  baseUrl = 'https://admin.hqbeds.com.br/pt-br/hqb/GKXgNR2gYx/availability?';
  defaultAltImg = 'Joinville Hostel';

  whatsappImgSource = '/assets/img/shared/wa.png';
  encondedMessage = 'Oi%20Local%20Hostel%21%20Vamos%20conversar%3F';
  whatsPhoneAppNumber = '5592984125252';
  whatsappApiLink = `https://api.whatsapp.com/send?phone=${this.whatsPhoneAppNumber}&text=${this.encondedMessage}`;

  arriveDateValue = {};
  departureDateValue = {};

  arriveDate = 'arriveDate';
  departureDate = 'departureDate';
  arriveError = false;
  departureError = false;

  dynamicLink = '';
  buttonDisabled = true;
  bookingBarFixed = false;
  hideDataPicker = false;
  shouldValidatInputDate = true;
  bookingBarOffsetTop: number;
  bookingBarOffsetTeste: number;

  @ViewChild('datePickerSection') datePickerHTMLElement: ElementRef;
  @Input('hideBookingBarOnTop') shouldHideBookingBarOnTop: boolean;

  constructor(
    _requestTranslateService: RequestTranslateService
  ) {
    _requestTranslateService.changeEmitted$.subscribe(
      language => { this.translateLabels(language) });
  }


  ngOnInit() {
    if (this.shouldHideBookingBarOnTop) {
      this.datePickerHTMLElement.nativeElement.style.display = (this.shouldHideBookingBarOnTop) ? 'none' : 'initial';
    }
  }
  
  ngAfterViewInit() {
    this.bookingBarOffsetTop = (this.datePickerHTMLElement.nativeElement.offsetTop +
                                this.datePickerHTMLElement.nativeElement.offsetHeight);
  }

  ngAfterViewChecked() {
    this.bookingBarOffsetTeste = (this.datePickerHTMLElement.nativeElement.offsetTop + 
                                  this.datePickerHTMLElement.nativeElement.offsetHeight);

    if (this.bookingBarOffsetTeste > this.bookingBarOffsetTop) { this.bookingBarOffsetTop = this.bookingBarOffsetTeste }
  }

  translateLabels(language) {
    if (language == 'Português') {
      this.bookingText = 'RESERVAR';
      this.arriveLabel = 'Data de chegada';
      this.departureLabel = 'Data de partida';
      this.arrivalErrorMessage = 'Selecione uma data de chegada';
      this.departureErrorMessage = 'Selecione uma data de partida';

    } else if (language == 'English') {
      this.arriveLabel = 'Arrival date'
      this.departureLabel = 'Departure date';
      this.bookingText = 'BOOK';
      this.arrivalErrorMessage = 'Select an arrival date';
      this.departureErrorMessage = 'Select a departure date';

    } else if (language == 'German') {
      this.arriveLabel = 'Ankunftsdatum'
      this.departureLabel = 'Abreisedatum';
      this.bookingText = 'BOOK';
      this.arrivalErrorMessage = 'Wählen Sie ein Ankunftsdatum';
      this.departureErrorMessage = 'Wählen Sie ein Abreisedatum aus';
    }
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    const verticalOffset: number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.checkLayoutDispay(verticalOffset);
  }

  checkLayoutDispay(verticalOffset) {
    this.bookingBarFixed = (verticalOffset > this.bookingBarOffsetTop) ? true : false;
    this.hideDataPicker = (this.bookingBarFixed && (window.innerWidth < 768)) ? true : false;
    this.shouldValidatInputDate = (this.bookingBarFixed && (window.innerWidth < 768)) ? false : true;
    if (this.shouldHideBookingBarOnTop) {
      this.datePickerHTMLElement.nativeElement.style.display = (this.bookingBarFixed) ? 'initial' : 'none';
    }
  }

  onSelectDate(date) {
    if (date['dateType'] == this.arriveDate) {
      this.arriveDateValue['day'] = date['dateValue']['_i']['date'];
      this.arriveDateValue['month'] = (date['dateValue']['_i']['month'] + 1); // HQSales expects months starting at index 1
      this.arriveDateValue['year'] = date['dateValue']['_i']['year'];

    } else {
      this.departureDateValue['day'] = date['dateValue']['_i']['date'];
      this.departureDateValue['month'] = (date['dateValue']['_i']['month'] + 1); // HQSales expects months starting at index 1
      this.departureDateValue['year'] = date['dateValue']['_i']['year'];
    }

    if (this.arriveDateValue && this.departureDateValue) {
      this.dynamicLink = `${this.baseUrl}arrival=${this.arriveDateValue['year']}-${this.arriveDateValue['month']}-${this.arriveDateValue['day']}&departure=${this.departureDateValue['year']}-${this.departureDateValue['month']}-${this.departureDateValue['day']}`;
      this.buttonDisabled = false;
    }
  }

  redirectToHQSales() {
    if (!this.shouldValidatInputDate) return window.location.href = this.baseUrl;

    if (this.arriveDateValue['day'] == undefined) return this.arriveError = true;

    else this.arriveError = false;

    if (this.departureDateValue['day'] == undefined) return this.departureError = true;

    else this.departureError = false;

    window.location.href = this.dynamicLink;
  }

  hideArriveError() { this.arriveError = false }

  hideDepartureError() { this.departureError = false }

}
