import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputExampleComponent } from './date-input-example.component';

describe('DateInputExampleComponent', () => {
  let component: DateInputExampleComponent;
  let fixture: ComponentFixture<DateInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateInputExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
