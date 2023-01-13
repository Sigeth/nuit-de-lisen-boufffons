import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservConfirmComponent } from './reserv-confirm.component';

describe('ReservConfirmComponent', () => {
  let component: ReservConfirmComponent;
  let fixture: ComponentFixture<ReservConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
