import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledInputExampleComponent } from './disabled-input-example.component';

describe('DisabledInputExampleComponent', () => {
  let component: DisabledInputExampleComponent;
  let fixture: ComponentFixture<DisabledInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisabledInputExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DisabledInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
