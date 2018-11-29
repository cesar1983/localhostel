import { Component, OnInit } from "@angular/core";
import { RequestTranslateService } from "../../services/request-translate.service";

@Component({
  selector: "app-second-property",
  templateUrl: "./second-property.component.html",
  styleUrls: ["./second-property.component.scss"]
})
export class SecondPropertyComponent implements OnInit {
  texts: any;
  bgImgPath = "assets/img/shared/figueredoBg.png";

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
