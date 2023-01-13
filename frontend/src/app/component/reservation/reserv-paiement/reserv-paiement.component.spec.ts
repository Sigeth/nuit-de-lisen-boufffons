import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservPaiementComponent } from './reserv-paiement.component';

describe('ReservPaiementComponent', () => {
  let component: ReservPaiementComponent;
  let fixture: ComponentFixture<ReservPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservPaiementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
