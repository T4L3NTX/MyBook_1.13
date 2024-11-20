import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalidadSoftwarePage } from './calidad-software.page';

describe('CalidadSoftwarePage', () => {
  let component: CalidadSoftwarePage;
  let fixture: ComponentFixture<CalidadSoftwarePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalidadSoftwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
