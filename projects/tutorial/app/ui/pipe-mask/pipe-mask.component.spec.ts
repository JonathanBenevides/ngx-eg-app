import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeMaskComponent } from './pipe-mask.component';

describe('PipeMaskComponent', () => {
  let component: PipeMaskComponent;
  let fixture: ComponentFixture<PipeMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeMaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
