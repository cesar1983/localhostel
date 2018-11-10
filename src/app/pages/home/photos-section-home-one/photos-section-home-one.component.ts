import { Component, OnInit } from "@angular/core";
import { RequestTranslateService } from "../../../services/request-translate.service";

@Component({
  selector: "app-photos-section-home-one",
  templateUrl: "./photos-section-home-one.component.html",
  styleUrls: ["./photos-section-home-one.component.scss"]
})
export class PhotosSectionHomeOneComponent implements OnInit {
  srcImgOne = "assets/img/home/joinvillehostel/1.jpg";
  srcImgTwo = "assets/img/home/joinvillehostel/2.jpg";
  srcImgThree = "assets/img/home/joinvillehostel/3.jpg";
  srcImgFour = "assets/img/home/joinvillehostel/4.jpg";
  srcImgFive = "assets/img/home/joinvillehostel/5.jpg";

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
