import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputExampleComponent } from './password-input-example.component';

describe('PasswordInputExampleComponent', () => {
  let component: PasswordInputExampleComponent;
  let fixture: ComponentFixture<PasswordInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordInputExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
