import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgOptComponent } from './eg-opt.component';

describe('EgOptComponent', () => {
  let component: EgOptComponent;
  let fixture: ComponentFixture<EgOptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgOptComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EgOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
