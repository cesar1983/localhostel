import { Component, OnInit } from '@angular/core';
import { RequestTranslateService } from '../../../services/request-translate.service';

@Component({
  selector: 'app-features-hostel',
  templateUrl: './features-hostel.component.html',
  styleUrls: ['./features-hostel.component.scss']
})
export class FeaturesHostelComponent implements OnInit {

  title = 'Tenha o melhor de Manaus';
  travelText = 'Passeios únicos';
  mapText = 'Localização privilegiada';
  happyText = 'Happy Hour todo dia';

  constructor(
    private requestTranslateService: RequestTranslateService,
  ) {
    requestTranslateService.changeEmitted$.subscribe(language => {
      console.log(language);
      // this.translateLabels(language)
    });
  }

  ngOnInit() { 
    // this.translateLabels('Português') 
  }

  // translateLabels(language) {
  //   if (language == 'Português') {
  //     this.title = 'Tenha o melhor de Manaus';
  //     this.travelText = 'Lorem ipsus';
  //     this.mapText = 'Lorem ipsus';
  //     return this.happyText = 'Lorem ipsus';
  //   }
  //   if (language == 'English') {
  //     this.title = 'Tenha o melhor de Manaus';
  //     this.travelText = 'Lorem ipsus';
  //     this.mapText = 'Lorem ipsus';
  //     return this.happyText = 'Lorem ipsus';
  //   }
  //   if (language == 'German') {
  //     this.title = 'Tenha o melhor de Manaus';
  //     this.travelText = 'Lorem ipsus';
  //     this.mapText = 'Lorem ipsus';
  //     return this.happyText = 'Lorem ipsus';
  //   }
  // }

}