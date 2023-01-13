import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservInfosClientsComponent } from './reserv-infos-clients.component';

describe('ReservInfosClientsComponent', () => {
  let component: ReservInfosClientsComponent;
  let fixture: ComponentFixture<ReservInfosClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservInfosClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservInfosClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
