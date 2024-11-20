import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminProgramacionMovilPage } from './admin-programacion-movil.page';

describe('AdminProgramacionMovilPage', () => {
  let component: AdminProgramacionMovilPage;
  let fixture: ComponentFixture<AdminProgramacionMovilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProgramacionMovilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
