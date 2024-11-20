import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPortafolioPage } from './admin-portafolio.page';

describe('AdminPortafolioPage', () => {
  let component: AdminPortafolioPage;
  let fixture: ComponentFixture<AdminPortafolioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPortafolioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
