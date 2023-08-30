import { Component } from '@angular/core';
import { ConversionService } from './services/conversion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  usdAmount: number | null;
  euroAmount: number | null;
  lkrAmount: number | null;
  buttonText = 'Convert';

  constructor(private conversionService: ConversionService) {}

  onClick(lkrAmount: number) {
    if (this.buttonText === 'Convert') {
      this.handleConvert(lkrAmount);
      return;
    }
    this.handleClear();
  }
  handleConvert(lkrAmount: number) {
    if (!isNaN(lkrAmount)) {
      this.usdAmount = parseFloat(
        this.conversionService.convertFromLKR(lkrAmount, 'USD')
      );
      this.euroAmount = parseFloat(
        this.conversionService.convertFromLKR(lkrAmount, 'EURO')
      );
      this.buttonText = 'Clear';
    }
  }

  handleClear() {
    this.usdAmount = null;
    this.euroAmount = null;
    this.lkrAmount = null;
    this.buttonText = 'Convert';
  }
}
