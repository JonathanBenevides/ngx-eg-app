import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgButtonComponent } from './eg-button.component';

describe('EgButtonComponent', () => {
  let component: EgButtonComponent;
  let fixture: ComponentFixture<EgButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
