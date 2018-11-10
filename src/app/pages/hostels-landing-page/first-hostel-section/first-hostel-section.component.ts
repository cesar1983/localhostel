import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-first-hostel-section",
  templateUrl: "./first-hostel-section.component.html",
  styleUrls: ["./first-hostel-section.component.scss"]
})
export class FirstHostelSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  backToTop() {
    window.scrollTo(0, 0);
  }
}
