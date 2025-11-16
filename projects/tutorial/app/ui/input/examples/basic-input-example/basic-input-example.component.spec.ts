import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInputExampleComponent } from './basic-input-example.component';

describe('BasicInputExampleComponent', () => {
  let component: BasicInputExampleComponent;
  let fixture: ComponentFixture<BasicInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicInputExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BasicInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
