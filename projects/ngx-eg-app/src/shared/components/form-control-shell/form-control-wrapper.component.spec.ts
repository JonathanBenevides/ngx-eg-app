import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlShellComponent } from './form-control-wrapper.component';

describe('FormControlShellComponent', () => {
  let component: FormControlShellComponent;
  let fixture: ComponentFixture<FormControlShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlShellComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormControlShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
