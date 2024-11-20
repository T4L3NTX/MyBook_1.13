import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEstadisticaPage } from './admin-estadistica.page';

describe('AdminEstadisticaPage', () => {
  let component: AdminEstadisticaPage;
  let fixture: ComponentFixture<AdminEstadisticaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEstadisticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
