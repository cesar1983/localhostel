import { Component, OnInit } from "@angular/core";
import { RequestTranslateService } from "../../../services/request-translate.service";

@Component({
  selector: "app-second-property-photos-section-one",
  templateUrl: "./second-property-photos-section-one.component.html",
  styleUrls: ["./second-property-photos-section-one.component.scss"]
})
export class SecondPropertyPhotosSectionOneComponent implements OnInit {
  srcImgOne = "assets/img/home/joinvillehostel/1ap.jpg";
  srcImgTwo = "assets/img/home/joinvillehostel/2ap.jpg";
  srcImgThree = "assets/img/home/joinvillehostel/3ap.jpg";
  srcImgFour = "assets/img/home/joinvillehostel/ap4.jpg";
  srcImgFive = "assets/img/home/joinvillehostel/1ag.jpg";

  defaultAltImg = "LocalHostel";
  text: string;
  description;

  constructor(private requestTranslateService: RequestTranslateService) {
    this.translateTitle("Português");
    requestTranslateService.changeEmitted$.subscribe(language =>
      this.translateTitle(language)
    );
  }

  ngOnInit() {}

  translateTitle(language) {
    this.description = this.requestTranslateService.getHostelDescriptionTranslate(
      language
    );

    if (language == "Português") return (this.text = "Áreas em comum");

    if (language == "English") return (this.text = "Common areas");

    if (language == "German") return (this.text = "Gemeinschaftsräume");
  }
}
