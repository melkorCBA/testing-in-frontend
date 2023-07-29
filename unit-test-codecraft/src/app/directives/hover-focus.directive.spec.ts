import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoverFocusDirective } from './hover-focus.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<input type="text" hoverFocus>',
})
class TestHostComponet {}

describe('Directive: HoverFocus', () => {
  let component: TestHostComponet;
  let fixture: ComponentFixture<TestHostComponet>;
  let inputElement: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverFocusDirective, TestHostComponet],
    });
    fixture = TestBed.createComponent(TestHostComponet);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('input'));
  });

  it('should change the background colour when hovered', () => {
    inputElement.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(
      getElement<HTMLInputElement>(inputElement).style.backgroundColor
    ).toBe('blue');
    inputElement.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(
      getElement<HTMLInputElement>(inputElement).style.backgroundColor
    ).toBe('inherit');
  });
});

function getElement<T>(de: DebugElement) {
  return de.nativeElement as T;
}
