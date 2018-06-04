import { Component, OnInit } from '@angular/core';
import { RequestTranslateService } from '../../services/request-translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  texts: any;

  constructor(
    private requestTranslateService: RequestTranslateService
  ) {
    this.texts = requestTranslateService.getHostelDescriptionTranslate('Português');
    requestTranslateService.changeEmitted$.subscribe(language => { this.translateLabels(language) });
  }

  ngOnInit() { }

  translateLabels(language) {
    this.texts = this.requestTranslateService.getHostelDescriptionTranslate(language);
  }

}
