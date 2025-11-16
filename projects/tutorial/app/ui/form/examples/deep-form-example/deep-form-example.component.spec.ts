import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepFormExampleComponent } from './deep-form-example.component';

describe('DeepFormExampleComponent', () => {
  let component: DeepFormExampleComponent;
  let fixture: ComponentFixture<DeepFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeepFormExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DeepFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
