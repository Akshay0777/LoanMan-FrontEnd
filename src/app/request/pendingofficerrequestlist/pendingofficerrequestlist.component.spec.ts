import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingofficerrequestlistComponent } from './pendingofficerrequestlist.component';

describe('PendingofficerrequestlistComponent', () => {
  let component: PendingofficerrequestlistComponent;
  let fixture: ComponentFixture<PendingofficerrequestlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingofficerrequestlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingofficerrequestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
