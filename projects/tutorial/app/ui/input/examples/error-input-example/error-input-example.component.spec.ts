import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInputExampleComponent } from './error-input-example.component';

describe('ErrorInputExampleComponent', () => {
  let component: ErrorInputExampleComponent;
  let fixture: ComponentFixture<ErrorInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorInputExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
