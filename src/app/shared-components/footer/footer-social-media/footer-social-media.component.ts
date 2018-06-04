import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-social-media',
  templateUrl: './footer-social-media.component.html',
  styleUrls: ['./footer-social-media.component.scss']
})
export class FooterSocialMediaComponent implements OnInit {

  fbLink = 'https://www.facebook.com/localhostelmanaus';
  instagramLink = 'https://www.instagram.com/localhostel/';

  constructor() { }

  ngOnInit() {
  }

}
