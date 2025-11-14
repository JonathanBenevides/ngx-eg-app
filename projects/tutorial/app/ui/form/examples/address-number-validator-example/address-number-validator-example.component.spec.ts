import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressNumberValidatorExampleComponent } from './address-number-validator-example.component';

describe('AddressNumberValidatorExampleComponent', () => {
  let component: AddressNumberValidatorExampleComponent;
  let fixture: ComponentFixture<AddressNumberValidatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressNumberValidatorExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressNumberValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
