import { Component, OnInit } from '@angular/core';
import { RequestTranslateService } from '../../../services/request-translate.service';

@Component({
  selector: 'app-feature-items-two',
  templateUrl: './feature-items-two.component.html',
  styleUrls: ['./feature-items-two.component.scss']
})
export class FeatureItemsTwoComponent implements OnInit {

  featuresText: any;
  bolshoiIcon = 'assets/img/home/joinvillehostel/bolchoi-icon.png';
  

  constructor(
    private requestTranslateService: RequestTranslateService,
  ) {
    this.featuresText = requestTranslateService.getFeaturesCityTranlate('Português');
    requestTranslateService.changeEmitted$.subscribe(language => { this.translateLabels(language) });
  }

  ngOnInit() { }

  translateLabels(language) {
    this.featuresText = this.requestTranslateService.getFeaturesCityTranlate(language);
  }

}
