import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailValidatorExampleComponent } from './email-validator-example.component';

describe('EmailValidatorExampleComponent', () => {
  let component: EmailValidatorExampleComponent;
  let fixture: ComponentFixture<EmailValidatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailValidatorExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EmailValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
