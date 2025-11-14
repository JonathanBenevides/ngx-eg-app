import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyNumberValidatorExampleComponent } from './only-number-validator-example.component';

describe('OnlyNumberValidatorExampleComponent', () => {
  let component: OnlyNumberValidatorExampleComponent;
  let fixture: ComponentFixture<OnlyNumberValidatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlyNumberValidatorExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyNumberValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
