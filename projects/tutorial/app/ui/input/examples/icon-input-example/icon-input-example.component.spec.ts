import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconInputExampleComponent } from './icon-input-example.component';

describe('IconInputExampleComponent', () => {
  let component: IconInputExampleComponent;
  let fixture: ComponentFixture<IconInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconInputExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
