import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  baseUrl = 'https://admin.hqbeds.com.br/en/hqb/QzEZrQplr0/availability?';
  defaultAltImg = 'Joinville Hostel';
  
  joinvilleHostelLogoNamePath = '/assets/img/logo-name.jpg';
  whatsappImgSource = '/assets/img/shared/wa.png';
  bannerHostelImg = 'assets/img/shared/logo.png'
  
  ngOnInit() {}

  constructor() {}

}
