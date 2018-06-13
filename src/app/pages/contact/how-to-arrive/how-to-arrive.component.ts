import { Component, OnInit } from '@angular/core';
import { RequestTranslateService } from '../../../services/request-translate.service';

@Component({
  selector: 'app-how-to-arrive',
  templateUrl: './how-to-arrive.component.html',
  styleUrls: ['./how-to-arrive.component.scss']
})
export class HowToArriveComponent implements OnInit {

  texts;
  centerTitle = true;
  uberOption = "Fácil e prático, basta colocar 'Local Hostel Manaus'. Vá até a área de embarque e aguarde o motorista lá."
  locationText = `No coração do centro histórico de Manaus, estamos localizados a poucos
                  metro do Teatro Amazonas e de grandes atrações turísticas.
                  É possível explorar a redondeza a pé e sentir a energia da cidade de uma
                  maneira única e inesquecível.<br>
                  Estamos localizado na Rua Dona Libânia, 215, Centro. Uma casa com o muro preto e um grafite de uma índia.`

  constructor( private requestTranslateService: RequestTranslateService ) {
    requestTranslateService.changeEmitted$.subscribe(language => { this.translateTexts(language) });
  }

  ngOnInit() { 
    this.texts = this.requestTranslateService.getHowToArriveText('Português');
  }

  translateTexts(language) {
    this.texts = this.requestTranslateService.getHowToArriveText(language);
  }

}
