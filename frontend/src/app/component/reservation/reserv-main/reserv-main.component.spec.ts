import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservMainComponent } from './reserv-main.component';

describe('ReservMainComponent', () => {
  let component: ReservMainComponent;
  let fixture: ComponentFixture<ReservMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
