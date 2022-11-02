import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingadminrequestlistComponent } from './pendingadminrequestlist.component';

describe('PendingadminrequestlistComponent', () => {
  let component: PendingadminrequestlistComponent;
  let fixture: ComponentFixture<PendingadminrequestlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingadminrequestlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingadminrequestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
