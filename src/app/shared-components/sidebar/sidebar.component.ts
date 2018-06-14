import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestTranslateService } from '../../services/request-translate.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebar') sidebarElement$: any;
  
  constructor(
    private requestTranslateService: RequestTranslateService 
  ) { }

  ngOnInit() {}
  
  onToogleSidebar(data) {
    this.sidebarElement$.toggle();
  }

  onRequestPTLanguage(translatedLanguageRequest) {
    this.requestTranslateService.emitChange(translatedLanguageRequest);
  }

  onRequestENLanguage(translatedLanguageRequest) {
    this.requestTranslateService.emitChange(translatedLanguageRequest);
  }

  onRequestDELanguage(translatedLanguageRequest) {
    this.requestTranslateService.emitChange(translatedLanguageRequest);
  }
  
}
