import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottombarComponent } from './bottombar.component';

describe('DashboardComponent', () => {
  let component: BottombarComponent;
  let fixture: ComponentFixture<BottombarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottombarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottombarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
