import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KiloPipe } from './pipes/kilo.pipe';
import { LoginComponent } from './components/login/login.component';
import { LoginAsyncComponent } from './components/login-async/login-async.component';
import { LoginEnhancedComponent } from './components/login-enhanced/login-enhanced.component';
import { HoverFocusDirective } from './directives/hover-focus.directive';
import { LoginEnhancedFormComponent } from './components/login-enhanced-form/login-enhanced-form.component';

@NgModule({
  declarations: [
    AppComponent,
    KiloPipe,
    LoginComponent,
    LoginAsyncComponent,
    LoginEnhancedComponent,
    HoverFocusDirective,
    LoginEnhancedFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
