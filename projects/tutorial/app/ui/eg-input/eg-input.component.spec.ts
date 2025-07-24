import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgInputComponent } from './eg-input.component';

describe('EgInputComponent', () => {
  let component: EgInputComponent;
  let fixture: ComponentFixture<EgInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgInputComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
