import { Component, OnInit } from "@angular/core";
import { RequestTranslateService } from "../../../services/request-translate.service";

@Component({
  selector: "app-photos-section",
  templateUrl: "./photos-section.component.html",
  styleUrls: ["./photos-section.component.scss"]
})
export class PhotosSectionComponent implements OnInit {
  srcImgOne = "assets/img/home/amazonas/1p.png";
  srcImgTwo = "assets/img/home/amazonas/2p.png";
  srcImgThree = "assets/img/home/amazonas/3p.jpg";
  srcImgFour = "assets/img/home/amazonas/4p.jpg";
  srcImgFive = "assets/img/home/amazonas/1g.png";

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
