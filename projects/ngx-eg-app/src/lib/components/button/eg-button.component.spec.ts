import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgButton } from './eg-button.component';

describe('EgButton', () => {
  let component: EgButton;
  let fixture: ComponentFixture<EgButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgButton]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EgButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
