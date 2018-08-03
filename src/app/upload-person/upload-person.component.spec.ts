import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPersonComponent } from './upload-person.component';

describe('UploadPersonComponent', () => {
  let component: UploadPersonComponent;
  let fixture: ComponentFixture<UploadPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
