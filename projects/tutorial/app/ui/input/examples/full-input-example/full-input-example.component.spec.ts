import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullInputExampleComponent } from './full-input-example.component';

describe('FullInputExampleComponent', () => {
  let component: FullInputExampleComponent;
  let fixture: ComponentFixture<FullInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullInputExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
