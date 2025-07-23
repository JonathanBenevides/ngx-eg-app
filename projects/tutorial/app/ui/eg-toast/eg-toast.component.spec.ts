import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgToastComponent } from './eg-toast.component';

describe('EgToastComponent', () => {
  let component: EgToastComponent;
  let fixture: ComponentFixture<EgToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgToastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
