import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-async',
  templateUrl: './login-async.component.html',
  styleUrls: ['./login-async.component.scss'],
})
export class LoginAsyncComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.isAuthenticatedAsync().then((status) => {
      this.isLoggedIn = status;
    });
  }
}
