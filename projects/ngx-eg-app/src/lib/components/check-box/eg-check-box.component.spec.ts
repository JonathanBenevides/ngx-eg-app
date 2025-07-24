import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEgCheckBoxComponent } from './eg-check-box.component';

describe('NgxEgCheckBoxComponent', () => {
  let component: NgxEgCheckBoxComponent;
  let fixture: ComponentFixture<NgxEgCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxEgCheckBoxComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NgxEgCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
