import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-google-map",
  templateUrl: "./google-map.component.html",
  styleUrls: ["./google-map.component.scss"]
})
export class GoogleMapComponent implements OnInit {
  @Input() secondProperty: boolean;

  constructor() {}

  ngOnInit() {}
}
