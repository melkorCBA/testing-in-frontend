import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css'],
})
export class CurrencyTableComponent {
  @Input() usdAmount: number | null;
  @Input() euroAmount: number | null;
}
