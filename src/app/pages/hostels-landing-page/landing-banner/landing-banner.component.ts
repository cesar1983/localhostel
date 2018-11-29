import { Component } from "@angular/core";

@Component({
  selector: "landing-banner",
  templateUrl: "./landing-banner.component.html",
  styleUrls: ["./landing-banner.component.scss"]
})
export class LandingBannerComponent {
  logoImgPath = "assets/img/shared/logo-no-property.png";
  constructor() {}
}
