import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from './login.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

class MockedAuthService {
  authenticated: boolean = false;
  isAuthenticated() {
    return this.authenticated;
  }

  isAuthenticatedAsync(): Promise<boolean> {
    return Promise.resolve(true);
  }
}

describe('Component: Login - with mocks', () => {
  let component: LoginComponent;
  let authService: MockedAuthService;

  beforeEach(() => {
    authService = new MockedAuthService();
    component = new LoginComponent(authService);
  });

  afterEach(() => {
    (authService as any) = null;
    (component as any) = null;
  });

  it('isLoggedIn should return false when user is not authenticated', () => {
    expect(component?.isLoggedIn()).toBeFalsy();
  });
  it('isLoggedIn should return true when user is authenticated', () => {
    authService!.authenticated = true;
    expect(component?.isLoggedIn()).toBeTruthy();
  });
});

class MockedAuthService2 extends AuthService {
  authenticated: boolean = false;
  override isAuthenticated() {
    return this.authenticated;
  }
}

describe('Component: Login - with mocks with overrides', () => {
  let component: LoginComponent;
  let authService: MockedAuthService2;

  beforeEach(() => {
    authService = new MockedAuthService2();
    component = new LoginComponent(authService);
  });

  afterEach(() => {
    (authService as any) = null;
    (component as any) = null;
  });

  it('isLoggedIn should return false when user is not authenticated', () => {
    expect(component?.isLoggedIn()).toBeFalsy();
  });
  it('isLoggedIn should return true when user is authenticated', () => {
    authService!.authenticated = true;
    expect(component?.isLoggedIn()).toBeTruthy();
  });
});

describe('Component: Login - with mocks', () => {
  let component: LoginComponent;
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
    component = new LoginComponent(authService);
  });

  afterEach(() => {
    (authService as any) = null;
    (component as any) = null;
  });

  it('isLoggedIn should return false when user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(component?.isLoggedIn()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
  it('isLoggedIn should return true when user is authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component?.isLoggedIn()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
});

describe('Component: Login - with spies', () => {
  let component: LoginComponent;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
    component = new LoginComponent(authService);
  });

  afterEach(() => {
    (authService as any) = null;
    (component as any) = null;
  });

  it('isLoggedIn should return false when user is not authenticated', () => {
    authService.isAuthenticated.and.returnValue(false);
    expect(component?.isLoggedIn()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
  it('isLoggedIn should return true when user is authenticated', () => {
    authService.isAuthenticated.and.returnValue(true);
    expect(component?.isLoggedIn()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
});

describe('Component: Login - with Angular TestBed', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
  });

  it('isLoggedIn should return false when user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(component?.isLoggedIn()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
  it('isLoggedIn should return true when user is authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component?.isLoggedIn()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
});

describe('Component: Login - test change detection', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('a'));
    authService = TestBed.inject(AuthService);
  });

  it('should show link text as "Login" when user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect((debugElement.nativeElement as HTMLAnchorElement).text.trim()).toBe(
      ''
    );
    fixture.detectChanges();
    expect(component?.isLoggedIn()).toBeFalsy();
    expect((debugElement.nativeElement as HTMLAnchorElement).text.trim()).toBe(
      'Login'
    );
  });
  it('should show link text as "Logout" when user is authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect((debugElement.nativeElement as HTMLAnchorElement).text.trim()).toBe(
      ''
    );
    fixture.detectChanges();
    expect(component?.isLoggedIn()).toBeTruthy();
    expect((debugElement.nativeElement as HTMLAnchorElement).text.trim()).toBe(
      'Logout'
    );
  });
});

describe('Component: Login - with mocks with TestBed component overrides', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let componentAuthService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService],
    });
    TestBed.overrideComponent(LoginComponent, {
      set: {
        providers: [
          {
            provide: AuthService,
            useClass: MockedAuthService,
          },
        ],
      },
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    componentAuthService = fixture.debugElement.injector.get(AuthService);
  });

  it('isLoggedIn should return false when user is not authenticated', () => {
    expect(componentAuthService instanceof MockedAuthService).toBeTruthy();
    spyOn(componentAuthService, 'isAuthenticated').and.returnValue(false);
    expect(component?.isLoggedIn()).toBeFalsy();
    expect(componentAuthService.isAuthenticated).toHaveBeenCalled();
  });
  it('isLoggedIn should return true when user is authenticated', () => {
    expect(componentAuthService instanceof MockedAuthService).toBeTruthy();
    spyOn(componentAuthService, 'isAuthenticated').and.returnValue(true);
    expect(component?.isLoggedIn()).toBeTruthy();
    expect(componentAuthService.isAuthenticated).toHaveBeenCalled();
  });
});
