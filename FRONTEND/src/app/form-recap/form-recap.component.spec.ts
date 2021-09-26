import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecapComponent } from './form-recap.component';

describe('FormRecapComponent', () => {
  let component: FormRecapComponent;
  let fixture: ComponentFixture<FormRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRecapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
