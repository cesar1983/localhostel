import { Component, OnInit } from "@angular/core";
import { RequestTranslateService } from "../../services/request-translate.service";

@Component({
  selector: "app-hostels-landing-page",
  templateUrl: "./hostels-landing-page.component.html",
  styleUrls: ["./hostels-landing-page.component.scss"]
})
export class HostelsLandingPageComponent implements OnInit {
  texts: any;

  constructor(private requestTranslateService: RequestTranslateService) {
    this.texts = requestTranslateService.getHostelDescriptionTranslate(
      "Português"
    );
    requestTranslateService.changeEmitted$.subscribe(language => {
      this.translateLabels(language);
    });
  }

  ngOnInit() {}

  translateLabels(language) {
    this.texts = this.requestTranslateService.getHostelDescriptionTranslate(
      language
    );
  }
}
