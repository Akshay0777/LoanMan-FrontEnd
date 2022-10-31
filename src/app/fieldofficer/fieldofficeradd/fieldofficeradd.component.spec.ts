import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldofficeraddComponent } from './fieldofficeradd.component';

describe('FieldofficeraddComponent', () => {
  let component: FieldofficeraddComponent;
  let fixture: ComponentFixture<FieldofficeraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldofficeraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldofficeraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
