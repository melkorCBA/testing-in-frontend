import { AuthService } from './auth.service';

describe('Service: Auth', () => {
  let service: AuthService | null;

  beforeEach(() => {
    service = new AuthService();
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('token');
  });

  it('should return true from isAutheticated when there is a token', () => {
    localStorage.setItem('token', '12');
    expect(service?.isAuthenticated()).toBeTruthy();
  });
  it('should return false from isAutheticated when there is no token', () => {
    expect(service?.isAuthenticated()).toBeFalsy();
  });
});
