import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateValidatorExampleComponent } from './date-validator-example.component';

describe('DateValidatorExampleComponent', () => {
  let component: DateValidatorExampleComponent;
  let fixture: ComponentFixture<DateValidatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateValidatorExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
