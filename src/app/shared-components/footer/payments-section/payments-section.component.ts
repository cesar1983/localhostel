import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-section',
  templateUrl: './payments-section.component.html',
  styleUrls: ['./payments-section.component.scss']
})
export class PaymentsSectionComponent implements OnInit {

  defaultAltImage = 'Joinville Hostel - payments';
  imageRootPath = 'assets/img/shared/footer';

  americanExpressImagePath = `${this.imageRootPath}/american-express-black.svg`;
  eloImagePath = `${this.imageRootPath}/elo-black.svg`;
  masterCardImagePath = `${this.imageRootPath}/master-card-black.svg`;
  visaImagePath = `${this.imageRootPath}/visa-black.svg`;

  constructor() { }

  ngOnInit() {
  }

}
