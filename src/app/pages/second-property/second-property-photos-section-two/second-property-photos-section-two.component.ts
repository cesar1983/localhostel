import { Component, OnInit } from "@angular/core";
import { RequestTranslateService } from "../../../services/request-translate.service";

@Component({
  selector: "app-second-property-photos-section-two",
  templateUrl: "./second-property-photos-section-two.component.html",
  styleUrls: ["./second-property-photos-section-two.component.scss"]
})
export class SecondPropertyPhotosSectionTwoComponent implements OnInit {
  sharedRoomOne = "assets/img/home/joinvillehostel/p1.jpg";
  sharedRoomTwo = "assets/img/home/joinvillehostel/p2.jpg";
  sharedRoomThree = "assets/img/home/joinvillehostel/p3.jpg";
  sharedRoomFour = "assets/img/home/joinvillehostel/p4.jpg";
  sharedRoomFive = "assets/img/home/joinvillehostel/g1.jpg";

  defaultAltImg = "LocalHostel ";
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

    if (language == "Português") return (this.text = "Nossos Quartos");

    if (language == "English") return (this.text = "Our Bedrooms");

    if (language == "German") return (this.text = "Our Bedrooms");
  }
}
