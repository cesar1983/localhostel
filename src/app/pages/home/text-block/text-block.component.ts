import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})
export class TextBlockComponent implements OnInit {
  @Input() firstText: any;
  @Input() secondText: any;
  @Input() thirdText: any;
  @Input() fourthText: any;
  @Input() title: any;
  @Input('center-title') centralizeTitle: boolean;

  constructor() { }

  ngOnInit() { }

}
