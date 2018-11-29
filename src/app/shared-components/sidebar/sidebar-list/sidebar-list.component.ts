import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sidebar-list",
  templateUrl: "./sidebar-list.component.html",
  styleUrls: ["./sidebar-list.component.scss"]
})
export class SidebarListComponent implements OnInit {
  @Output() toogledSidebar = new EventEmitter<any>();

  constructor() {}

  logoImgPath = "assets/img/shared/logo-no-property.png";
  defaultAltImg = "LocalHostel";

  ngOnInit() {}

  toogleSidebar($event) {
    this.toogledSidebar.emit("toogle");
    window.scrollTo(0, 0);
  }
}
