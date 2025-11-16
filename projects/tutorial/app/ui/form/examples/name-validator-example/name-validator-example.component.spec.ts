import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameValidatorExampleComponent } from './name-validator-example.component';

describe('NameValidatorExampleComponent', () => {
  let component: NameValidatorExampleComponent;
  let fixture: ComponentFixture<NameValidatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameValidatorExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NameValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
