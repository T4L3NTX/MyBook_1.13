import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminInglesPage } from './admin-ingles.page';

describe('AdminInglesPage', () => {
  let component: AdminInglesPage;
  let fixture: ComponentFixture<AdminInglesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInglesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
