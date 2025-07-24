import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgFormComponent } from './eg-form.component';

describe('EgFormComponent', () => {
  let component: EgFormComponent;
  let fixture: ComponentFixture<EgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
