import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-whatsapp-contact",
  templateUrl: "./whatsapp-contact.component.html",
  styleUrls: ["./whatsapp-contact.component.scss"]
})
export class WhatsappContactComponent implements OnInit {
  whatsPhoneAppNumber = "5592984125252";
  encondedMessage = "Oi%20Local%20Hostel%21%20Vamos%20conversar%3F";
  whatsappApiLink = `https://api.whatsapp.com/send?phone=${
    this.whatsPhoneAppNumber
  }&text=${this.encondedMessage}`;

  defaultAltImage = "LocalHostel ";
  whatsappImagePath = "assets/img/shared/wa.png";

  constructor() {}

  ngOnInit() {}
}
