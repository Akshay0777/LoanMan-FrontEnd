import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldofficerComponent } from './fieldofficer.component';

describe('FieldofficerComponent', () => {
  let component: FieldofficerComponent;
  let fixture: ComponentFixture<FieldofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
