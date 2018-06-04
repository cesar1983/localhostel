import { Component, OnInit } from '@angular/core';
import { RequestTranslateService } from '../../../services/request-translate.service';

@Component({
  selector: 'app-photos-section-home-two',
  templateUrl: './photos-section-home-two.component.html',
  styleUrls: ['./photos-section-home-two.component.scss']
})
export class PhotosSectionHomeTwoComponent implements OnInit {

  sharedRoomOne   = 'assets/img/home/joinvillehostel/6.jpg';
  sharedRoomTwo   = 'assets/img/home/joinvillehostel/7.jpg';
  sharedRoomThree = 'assets/img/home/joinvillehostel/8.jpg';
  sharedRoomFour  = 'assets/img/home/joinvillehostel/9.jpg';
  sharedRoomFive  = 'assets/img/home/joinvillehostel/10.jpg';  

  defaultAltImg = 'Joinville Hostel';

  bedroomsText: any;

  constructor(
    private requestTranslateService: RequestTranslateService,
  ) {
    this.bedroomsText = this.requestTranslateService.getBedroomsTranslate('Português');
    requestTranslateService.changeEmitted$.subscribe(language => this.translateBedroomTexts(language));
  }

  ngOnInit() { }

  translateBedroomTexts(language) {
    this.bedroomsText = this.requestTranslateService.getBedroomsTranslate(language);
  }


}
