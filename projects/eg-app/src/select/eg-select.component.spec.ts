import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgSelectComponent } from './eg-select.component';

describe('EgSelectComponent', () => {
  let component: EgSelectComponent;
  let fixture: ComponentFixture<EgSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
