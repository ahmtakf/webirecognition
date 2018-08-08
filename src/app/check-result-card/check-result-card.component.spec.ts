import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckResultCardComponent } from './check-result-card.component';

describe('CheckResultCardComponent', () => {
  let component: CheckResultCardComponent;
  let fixture: ComponentFixture<CheckResultCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckResultCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckResultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
