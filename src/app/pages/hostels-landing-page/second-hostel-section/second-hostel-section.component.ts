import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-second-hostel-section",
  templateUrl: "./second-hostel-section.component.html",
  styleUrls: ["./second-hostel-section.component.scss"]
})
export class SecondHostelSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  backToTop() {
    window.scrollTo(0, 0);
  }
}
