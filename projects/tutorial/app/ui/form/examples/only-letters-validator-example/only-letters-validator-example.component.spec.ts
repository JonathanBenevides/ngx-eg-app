import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyLettersValidatorExampleComponent } from './only-letters-validator-example.component';

describe('OnlyLettersValidatorExampleComponent', () => {
  let component: OnlyLettersValidatorExampleComponent;
  let fixture: ComponentFixture<OnlyLettersValidatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlyLettersValidatorExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OnlyLettersValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
