import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  @Output()
  toogledSidebar = new EventEmitter<any>();
  @Output()
  requestPTText = new EventEmitter<any>();
  @Output()
  requestENText = new EventEmitter<any>();
  @Output()
  requestDEText = new EventEmitter<any>();

  brFlag = "/assets/img/shared/toolbar/br.png";
  ukFlag = "/assets/img/shared/toolbar/uk.png";
  gmFlag = "/assets/img/shared/toolbar/gm.png";
  defaultAltImg = "LocalHostel ";
  showPhone: boolean = false;

  constructor() {}

  ngOnInit() {
    if (window.location.pathname !== "/") {
      // this.showPhone = true;
      this.showPhone = false;
    }
  }

  toogleSidebar($event) {
    this.toogledSidebar.emit("toogle");
  }

  requestPTLanguague($event) {
    this.requestPTText.emit("PT");
  }

  requestENLanguague($event) {
    this.requestENText.emit("EN");
  }

  requestDELanguague($event) {
    this.requestDEText.emit("DE");
  }
}
