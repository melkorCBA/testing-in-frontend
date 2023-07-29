import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEnhancedFormComponent } from './login-enhanced-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('Component: LoginEnhancedForm - forms', () => {
  let component: LoginEnhancedFormComponent;
  let fixture: ComponentFixture<LoginEnhancedFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginEnhancedFormComponent],
      imports: [ReactiveFormsModule, FormsModule],
    });
    fixture = TestBed.createComponent(LoginEnhancedFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should be in invalid sate when form is blank', () => {
    expect(component.form.controls['email'].invalid).toBeTruthy();
    expect(component.form.controls['password'].invalid).toBeTruthy();
    expect(component.form.invalid).toBeTruthy();
  });

  describe('email validity', () => {
    it('should have requried validation error when email is empty', () => {
      const email = component.form.controls['email'];
      expect(email.invalid).toBeTruthy();
      expect(email.errors!['required']).toBeTruthy();
    });
    it('should be in valid sate when valid email is provided', () => {
      const email = component.form.controls['email'];
      email.setValue('abc@123.com');
      fixture.detectChanges();
      expect(email.valid).toBeTruthy();
      expect(email.errors).toBeNull();
    });
  });

  describe('submit form', () => {
    it('should not trigger login event when form is invalid', () => {
      spyOn(component.onLogin, 'emit');
      component.login();
      fixture.detectChanges();
      expect(component.onLogin.emit).not.toHaveBeenCalled();
    });
    it('should trigger login event when form is valid', () => {
      const form = component.form;
      const email = component.form.controls['email'];
      const password = component.form.controls['password'];
      email.setValue('abc@123.com');
      password.setValue('abc@123.com');
      expect(email.valid).toBeTruthy();
      expect(password.valid).toBeTruthy();
      expect(form.valid).toBeTruthy();
      spyOn(component.onLogin, 'emit');
      component.login();
      expect(component.onLogin.emit).toHaveBeenCalled();
      // ** if change ditection is called this test fails - why ?
    });
  });
});
