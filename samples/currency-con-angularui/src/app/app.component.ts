import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  usdAmount?: number;
  euroAmount?: number;
  lkrAmount: number;
  buttonText = 'Convert';

  constructor() {}

  onClick() {
    if (this.buttonText === 'Convert') {
      this.handleConvert();
      return;
    }
    this.handleClear();
  }
  handleConvert() {
    if (!isNaN(this.lkrAmount)) {
      this.usdAmount = +(this.lkrAmount / 200).toFixed(2);
      this.euroAmount = +(this.lkrAmount / 230).toFixed(2);
      this.buttonText = 'Clear';
    }
  }

  handleClear() {
    this.usdAmount = 0;
    this.euroAmount = 0;
    this.lkrAmount = 0;
    this.buttonText = 'Convert';
  }
}
