import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent implements OnInit {
  @Output() toogledSidebar = new EventEmitter<any>();

  constructor() { }

  logoImgPath = 'assets/img/shared/logo.png';
  logoImgPathNoText = 'assets/img/shared/sidebar/logo-joinville-hostel-no-text.jpg'
  
  defaultAltImg = 'Joinville Hostel';

  ngOnInit() {}

  toogleSidebar($event) {
    this.toogledSidebar.emit("toogle");
  }

}
