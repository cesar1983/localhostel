import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-location-details",
  templateUrl: "./location-details.component.html",
  styleUrls: ["./location-details.component.scss"]
})
export class LocationDetailsComponent implements OnInit {
  @Input() address: string;
  @Input() phone: string;
  @Input() email: string;

  constructor() {}

  ngOnInit() {}
}
