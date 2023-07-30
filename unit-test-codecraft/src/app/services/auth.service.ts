import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  isAuthenticatedAsync(): Promise<boolean> {
    return Promise.resolve(!!localStorage.getItem('token'));
  }
}