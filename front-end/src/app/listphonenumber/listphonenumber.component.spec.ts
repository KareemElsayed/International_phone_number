import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListphonenumberComponent } from './listphonenumber.component';

describe('ListphonenumberComponent', () => {
  let component: ListphonenumberComponent;
  let fixture: ComponentFixture<ListphonenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListphonenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListphonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
