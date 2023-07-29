import { Component, EventEmitter, Input, Output } from '@angular/core';

export class User {
  constructor(public email: string, public password: string) {}
}

@Component({
  selector: 'app-login-enhanced',
  templateUrl: './login-enhanced.component.html',
  styleUrls: ['./login-enhanced.component.scss'],
})
export class LoginEnhancedComponent {
  @Output() onLogin = new EventEmitter<User>();
  @Input() disabled: boolean = false;

  login(email: string, password: string) {
    console.log(`login wih ${email} ${password}`);
    if (email && password && !this.disabled)
      this.onLogin.emit(new User(email, password));
  }
}
