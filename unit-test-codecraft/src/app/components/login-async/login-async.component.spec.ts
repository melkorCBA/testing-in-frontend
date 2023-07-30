import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';

import { LoginAsyncComponent } from './login-async.component';
import { AuthService } from 'src/app/services/auth.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('componet: LoginAsync - async with jasmine way - done ', () => {
  let componet: LoginAsyncComponent;
  let debugElement: DebugElement;
  let authService: AuthService;
  let fixture: ComponentFixture<LoginAsyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAsyncComponent],
      providers: [AuthService],
    });

    fixture = TestBed.createComponent(LoginAsyncComponent);
    componet = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('a'));
    authService = TestBed.inject(AuthService);
  });

  it('should show as login when user is not authenticated', (done) => {
    componet.isLoggedIn = true;
    fixture.detectChanges();
    const spy = spyOn(authService, 'isAuthenticatedAsync').and.returnValue(
      Promise.resolve(false)
    );
    componet.ngOnInit();

    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      const text = (debugElement.nativeElement as HTMLAnchorElement).text;
      expect(text).toBe('Login');
      done();
    });
  });
  it('should show as logout when user is  authenticated', (done) => {
    componet.isLoggedIn = false;
    fixture.detectChanges();
    const spy = spyOn(authService, 'isAuthenticatedAsync').and.returnValue(
      Promise.resolve(true)
    );
    componet.ngOnInit();

    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      const text = (debugElement.nativeElement as HTMLAnchorElement).text;
      expect(text).toBe('Logout');
      done();
    });
  });
});

describe('componet: LoginAsync - async with angualr way - async test zone async/wait', () => {
  let componet: LoginAsyncComponent;
  let debugElement: DebugElement;
  let authService: AuthService;
  let fixture: ComponentFixture<LoginAsyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAsyncComponent],
      providers: [AuthService],
    });

    fixture = TestBed.createComponent(LoginAsyncComponent);
    componet = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('a'));
    authService = TestBed.inject(AuthService);
  });

  it('should show as login when user is not authenticated', waitForAsync(async () => {
    componet.isLoggedIn = true;
    fixture.detectChanges();
    spyOn(authService, 'isAuthenticatedAsync').and.returnValue(
      Promise.resolve(false)
    );
    componet.ngOnInit();

    await fixture.whenStable();
    fixture.detectChanges();
    const text = (debugElement.nativeElement as HTMLAnchorElement).text;
    expect(text).toBe('Login');
  }));
  it('should show as logout when user is  authenticated', waitForAsync(async () => {
    componet.isLoggedIn = false;
    fixture.detectChanges();
    spyOn(authService, 'isAuthenticatedAsync').and.returnValue(
      Promise.resolve(true)
    );
    componet.ngOnInit();

    await fixture.whenStable();
    fixture.detectChanges();
    const text = (debugElement.nativeElement as HTMLAnchorElement).text;
    expect(text).toBe('Logout');
  }));
});

describe('componet: LoginAsync - async with angualr way - async test zone ', () => {
  let componet: LoginAsyncComponent;
  let debugElement: DebugElement;
  let authService: AuthService;
  let fixture: ComponentFixture<LoginAsyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAsyncComponent],
      providers: [AuthService],
    });

    fixture = TestBed.createComponent(LoginAsyncComponent);
    componet = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('a'));
    authService = TestBed.inject(AuthService);
  });

  it('should show as login when user is not authenticated', waitForAsync(() => {
    componet.isLoggedIn = true;
    fixture.detectChanges();
    spyOn(authService, 'isAuthenticatedAsync').and.returnValue(
      Promise.resolve(false)
    );
    componet.ngOnInit();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const text = (debugElement.nativeElement as HTMLAnchorElement).text;
      expect(text).toBe('Login');
    });
  }));
  it('should show as logout when user is  authenticated', waitForAsync(() => {
    componet.isLoggedIn = false;
    fixture.detectChanges();
    spyOn(authService, 'isAuthenticatedAsync').and.returnValue(
      Promise.resolve(true)
    );
    componet.ngOnInit();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const text = (debugElement.nativeElement as HTMLAnchorElement).text;
      expect(text).toBe('Logout');
    });
  }));
});

describe('componet: LoginAsync - async with angualr way - fakeAsync(sync test)', () => {
  let componet: LoginAsyncComponent;
  let debugElement: DebugElement;
  let authService: AuthService;
  let fixture: ComponentFixture<LoginAsyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAsyncComponent],
      providers: [AuthService],
    });

    fixture = TestBed.createComponent(LoginAsyncComponent);
    componet = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('a'));
    authService = TestBed.inject(AuthService);
  });

  it('should show as login when user is not authenticated', fakeAsync(() => {
    componet.isLoggedIn = true;
    fixture.detectChanges();
    spyOn(authService, 'isAuthenticatedAsync').and.returnValue(
      Promise.resolve(false)
    );
    componet.ngOnInit();

    tick();
    fixture.detectChanges();
    const text = (debugElement.nativeElement as HTMLAnchorElement).text;
    expect(text).toBe('Login');
  }));
  it('should show as logout when user is  authenticated', fakeAsync(() => {
    componet.isLoggedIn = false;
    fixture.detectChanges();
    spyOn(authService, 'isAuthenticatedAsync').and.returnValue(
      Promise.resolve(true)
    );
    componet.ngOnInit();

    tick(); // blocks untill all promises in fakeAsync zone is completed
    // **fakeAsync doesn't track any XHR/HTTP requests
    fixture.detectChanges();
    const text = (debugElement.nativeElement as HTMLAnchorElement).text;
    expect(text).toBe('Logout');
  }));
});
