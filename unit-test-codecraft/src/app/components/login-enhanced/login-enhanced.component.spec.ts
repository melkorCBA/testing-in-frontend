import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { LoginEnhancedComponent, User } from './login-enhanced.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Component: LoginEnhanced - testing input/output', () => {
  let component: LoginEnhancedComponent;
  let fixture: ComponentFixture<LoginEnhancedComponent>;
  let submitButton: HTMLButtonElement;
  let submitButtonDebugElement: DebugElement;
  let emailInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginEnhancedComponent],
    });
    fixture = TestBed.createComponent(LoginEnhancedComponent);
    component = fixture.componentInstance;

    submitButtonDebugElement = fixture.debugElement.query(By.css('button'));
    submitButton = getElement<HTMLButtonElement>(submitButtonDebugElement);
    emailInput = getElement<HTMLInputElement>(
      fixture.debugElement.query(By.css('input[type=email]'))
    );
    passwordInput = getElement<HTMLInputElement>(
      fixture.debugElement.query(By.css('input[type=password]'))
    );

    fixture.detectChanges();
  });

  it('should disable submit button when disabled is set to true', () => {
    component.disabled = true;
    fixture.detectChanges();
    expect(submitButton.disabled).toBeTruthy();
  });
  it('should enable submit button when disabled is set to false', () => {
    component.disabled = false;
    fixture.detectChanges();
    expect(submitButton.disabled).toBeFalsy();
  });

  it('should emit the user object with username/password when from is submited', fakeAsync(() => {
    component.disabled = false;
    emailInput.value = 'test@123.com';
    passwordInput.value = 'Abc@123';
    let emitedUser: User;
    component.onLogin.subscribe((user) => (emitedUser = user));
    // submitButton.click();
    submitButtonDebugElement.triggerEventHandler('click', null);

    tick();
    fixture.detectChanges();
    expect(emitedUser!.email).toBe('test@123.com');
    expect(emitedUser!.password).toBe('Abc@123');
  }));
});

function getElement<T>(de: DebugElement) {
  return de.nativeElement as T;
}
