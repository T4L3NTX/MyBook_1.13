import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEticaPage } from './admin-etica.page';

describe('AdminEticaPage', () => {
  let component: AdminEticaPage;
  let fixture: ComponentFixture<AdminEticaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
