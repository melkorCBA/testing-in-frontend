import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css'],
})
export class CurrencyInputComponent {
  lkrAmount: number;
  @Output() onClick = new EventEmitter<number>();
  @Input() buttonText: string;

  handleConvert() {
    this.onClick.emit(this.lkrAmount);
  }
}
