import { Component, OnInit } from "@angular/core";
import { RequestTranslateService } from "../../../services/request-translate.service";

@Component({
  selector: "app-feature-items",
  templateUrl: "./feature-items.component.html",
  styleUrls: ["./feature-items.component.scss"]
})
export class FeatureItemsComponent implements OnInit {
  featuresText: any;
  dynamicText: string;

  constructor(private requestTranslateService: RequestTranslateService) {
    this.featuresText = requestTranslateService.getFeaturesTranlate(
      "Português"
    );
    requestTranslateService.changeEmitted$.subscribe(language => {
      this.translateLabels(language);
    });
  }

  ngOnInit() {
    if (window.location.pathname === "/manaus") {
      this.dynamicText = "Transfer";
    } else if (window.location.pathname === "/figueiredo") {
      this.dynamicText = "Indicação de guias";
    }
  }

  translateLabels(language) {
    this.featuresText = this.requestTranslateService.getFeaturesTranlate(
      language
    );
  }
}
