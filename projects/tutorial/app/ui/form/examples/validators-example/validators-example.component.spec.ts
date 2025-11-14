import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorsExampleComponent } from './validators-example.component';

describe('ValidatorsExampleComponent', () => {
  let component: ValidatorsExampleComponent;
  let fixture: ComponentFixture<ValidatorsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidatorsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatorsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
