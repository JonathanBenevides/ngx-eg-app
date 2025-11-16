import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomErrorInputExampleComponent } from './custom-error-input-example.component';

describe('CustomErrorInputExampleComponent', () => {
  let component: CustomErrorInputExampleComponent;
  let fixture: ComponentFixture<CustomErrorInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomErrorInputExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomErrorInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
