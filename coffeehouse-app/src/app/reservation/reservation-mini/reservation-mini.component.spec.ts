import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationMiniComponent } from './reservation-mini.component';

describe('ReservationMiniComponent', () => {
  let component: ReservationMiniComponent;
  let fixture: ComponentFixture<ReservationMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
