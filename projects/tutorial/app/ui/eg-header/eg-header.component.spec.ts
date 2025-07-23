import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgHeaderComponent } from './eg-header.component';

describe('EgHeaderComponent', () => {
  let component: EgHeaderComponent;
  let fixture: ComponentFixture<EgHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
