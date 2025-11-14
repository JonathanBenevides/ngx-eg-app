import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskInputExampleComponent } from './mask-input-example.component';

describe('MaskInputExampleComponent', () => {
  let component: MaskInputExampleComponent;
  let fixture: ComponentFixture<MaskInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaskInputExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaskInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
