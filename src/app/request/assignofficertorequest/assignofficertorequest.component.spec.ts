import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignofficertorequestComponent } from './assignofficertorequest.component';

describe('AssignofficertorequestComponent', () => {
  let component: AssignofficertorequestComponent;
  let fixture: ComponentFixture<AssignofficertorequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignofficertorequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignofficertorequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
