import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeetAdminPage } from './meet-admin.page';

describe('MeetAdminPage', () => {
  let component: MeetAdminPage;
  let fixture: ComponentFixture<MeetAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
