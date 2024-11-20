import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCalidadSoftwarePage } from './admin-calidad-software.page';

describe('AdminCalidadSoftwarePage', () => {
  let component: AdminCalidadSoftwarePage;
  let fixture: ComponentFixture<AdminCalidadSoftwarePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCalidadSoftwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
