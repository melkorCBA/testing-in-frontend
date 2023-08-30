import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyInputComponent } from './components/currency-input/currency-input.component';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CurrencyInputComponent, CurrencyTableComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
