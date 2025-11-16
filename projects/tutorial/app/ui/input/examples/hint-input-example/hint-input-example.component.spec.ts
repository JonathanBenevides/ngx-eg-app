import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintInputExampleComponent } from './hint-input-example.component';

describe('HintInputExampleComponent', () => {
  let component: HintInputExampleComponent;
  let fixture: ComponentFixture<HintInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HintInputExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HintInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
