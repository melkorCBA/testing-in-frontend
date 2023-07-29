import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../login-enhanced/login-enhanced.component';

@Component({
  selector: 'app-login-enhanced-form',
  templateUrl: './login-enhanced-form.component.html',
  styleUrls: ['./login-enhanced-form.component.scss'],
})
export class LoginEnhancedFormComponent implements OnInit {
  @Output() onLogin = new EventEmitter<User>();
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[^@]*@[^ @]*')]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  login() {
    if (this.form.invalid) return;
    this.onLogin.emit(
      new User(this.form.value.email, this.form.value.password)
    );
  }
}
