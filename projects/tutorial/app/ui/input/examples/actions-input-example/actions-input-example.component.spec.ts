import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsInputExampleComponent } from './actions-input-example.component';

describe('ActionsInputExampleComponent', () => {
  let component: ActionsInputExampleComponent;
  let fixture: ComponentFixture<ActionsInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionsInputExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
