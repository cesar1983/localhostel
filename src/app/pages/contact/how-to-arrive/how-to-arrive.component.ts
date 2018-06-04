import { Component, OnInit } from '@angular/core';
import { RequestTranslateService } from '../../../services/request-translate.service';

@Component({
  selector: 'app-how-to-arrive',
  templateUrl: './how-to-arrive.component.html',
  styleUrls: ['./how-to-arrive.component.scss']
})
export class HowToArriveComponent implements OnInit {

  texts;
  centerTitle = true;

  constructor( private requestTranslateService: RequestTranslateService ) {
    requestTranslateService.changeEmitted$.subscribe(language => { this.translateTexts(language) });
  }

  ngOnInit() { 
    this.texts = this.requestTranslateService.getHowToArriveText('Português');
  }

  translateTexts(language) {
    this.texts = this.requestTranslateService.getHowToArriveText(language);
  }

}
