import { Component, OnInit } from "@angular/core";
import { RequestTranslateService } from "../../../services/request-translate.service";

@Component({
  selector: "app-photos-section-home-three",
  templateUrl: "./photos-section-home-three.component.html",
  styleUrls: ["./photos-section-home-three.component.scss"]
})
export class PhotosSectionHomeThreeComponent implements OnInit {
  srcImgOne = "assets/img/home/joinville/joinville superior esquerdo.png";
  srcImgTwo = "assets/img/home/joinville/joinville inferior esquerdo.png";
  srcImgThree = "assets/img/home/joinville/joinville centro.png";
  srcImgFour = "assets/img/home/joinville/joinville superior direito.png";
  srcImgFive = "assets/img/home/joinville/joinville inferior direito.png";

  defaultAltImg = "LocalHostel ";
  text: string;

  constructor(private requestTranslateService: RequestTranslateService) {
    this.text = this.translateTitle("Português");
    requestTranslateService.changeEmitted$.subscribe(language =>
      this.translateTitle(language)
    );
  }

  ngOnInit() {}

  translateTitle(language) {
    if (language == "Português") return (this.text = "Áreas em comum");

    if (language == "English") return (this.text = "Common areas");

    if (language == "German") return (this.text = "Gemeinschaftsräume");
  }
}
