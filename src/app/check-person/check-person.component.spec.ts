import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPersonComponent } from './check-person.component';

describe('CheckPersonComponent', () => {
  let component: CheckPersonComponent;
  let fixture: ComponentFixture<CheckPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
