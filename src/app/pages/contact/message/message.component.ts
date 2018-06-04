import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { FlashMessagesService } from 'angular2-flash-messages';
import { EmailLeadService } from '../../../services/email-lead.service';
import { EmailLead } from '../../../models/EmailLead';
import { RequestTranslateService } from '../../../services/request-translate.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  isLinear = true;
  alreadySentMessage = false;
  emailLead;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  
  sendMessageText: string;
  fullNameText: string;
  nextText: string
  previousText: string;
  messageText: string;
  submitText: string;
  flashSuccessMessage: string;

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private requestTranslateService: RequestTranslateService,
    private _formBuilder: FormBuilder,
    private _flashMessagesService: FlashMessagesService,
    private emailLeadSerice: EmailLeadService
  ) {
    this.emailLead = { email: '', name: '', message: '' };
    requestTranslateService.changeEmitted$.subscribe(language => { this.translateLabels(language) });
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      email: ['', Validators.email]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

    this.translateLabels('Português');
  }

  translateLabels(language) {
    if (language == 'Português') {
      this.sendMessageText = 'Envie-nos uma mensagem';
      this.fullNameText = 'Nome completo';
      this.nextText = 'Próximo';
      this.previousText = 'Anterior';
      this.messageText = 'Mensagem';
      this.submitText = 'ENVIAR';
      this.flashSuccessMessage = 'Mensagem enviada com sucesso! Entraremos em contato o mais breve possível';
    }
    if (language == 'English') {
      this.sendMessageText = 'Send us a message';
      this.fullNameText = 'Full name';
      this.nextText = 'Next';
      this.previousText = 'Previous';
      this.messageText = 'Message';
      this.submitText = 'SEND';
      this.flashSuccessMessage = 'Message sent successfully! We will contact you as soon as possible.';
    }
    if (language == 'German') {
      this.sendMessageText = 'Schick uns eine Nachricht';
      this.fullNameText = 'Vollständiger Name';
      this.nextText = 'Nächster';
      this.previousText = 'Bisherige';
      this.messageText = 'Botschaft';
      this.submitText = 'SENDEN';
      this.flashSuccessMessage = 'Nachricht erfolgreich gesendet! Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen.';
    }
  }


  onSubmit() {
    this.emailLeadSerice.addEmailLead(this.emailLead);
    this._flashMessagesService.show(this.flashSuccessMessage, {
      cssClass: 'alert alert-success fixed-flash-message', timeout: 10000
    });
    
    this.alreadySentMessage = true;
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Not a valid email' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

}