import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservDisposComponent } from './reserv-dispos.component';

describe('ReservDisposComponent', () => {
  let component: ReservDisposComponent;
  let fixture: ComponentFixture<ReservDisposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservDisposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservDisposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
