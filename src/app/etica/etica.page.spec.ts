import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EticaPage } from './etica.page';

describe('EticaPage', () => {
  let component: EticaPage;
  let fixture: ComponentFixture<EticaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
