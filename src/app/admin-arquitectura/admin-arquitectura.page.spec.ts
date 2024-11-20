import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminArquitecturaPage } from './admin-arquitectura.page';

describe('AdminArquitecturaPage', () => {
  let component: AdminArquitecturaPage;
  let fixture: ComponentFixture<AdminArquitecturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArquitecturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
