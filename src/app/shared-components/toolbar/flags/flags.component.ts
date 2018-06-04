import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RequestTranslateService } from '../../../services/request-translate.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit {
  @Output() requestTranslateText = new EventEmitter<any>();

  brFlag = '/assets/img/shared/toolbar/br.png';
  ukFlag = '/assets/img/shared/toolbar/uk.png';
  gmFlag = '/assets/img/shared/toolbar/gm.png';
  defaultAltImage = 'Mama Brasil Hostel';

  selectedLanguage = 'Português';
  selectedFlag = this.brFlag;

  languageOne = 'English';
  flagOne = this.ukFlag;

  languageTwo = 'German';
  flagTwo = this.gmFlag;

  constructor(
    private requestTranslateService: RequestTranslateService
  ) { }

  ngOnInit() { }

  requestTranslate(language) {
    if (language == 'English') {
      this.selectedFlag = this.ukFlag;

      this.languageOne = 'Português';
      this.flagOne = this.brFlag;

      this.languageTwo = 'German';
      this.flagTwo = this.gmFlag;

    } else if (language == 'German') {
      this.selectedFlag = this.gmFlag;

      this.languageOne = 'Português';
      this.flagOne = this.brFlag;

      this.languageTwo = 'English';
      this.flagTwo = this.ukFlag;

    } else {
      this.selectedFlag = this.brFlag;

      this.languageOne = 'English';
      this.flagOne = this.ukFlag;

      this.languageTwo = 'German';
      this.flagTwo = this.gmFlag;
    }

    this.requestTranslateService.emitChange(language);

  }

}
