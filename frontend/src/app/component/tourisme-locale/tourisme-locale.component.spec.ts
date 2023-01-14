import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismeLocaleComponent } from './tourisme-locale.component';

describe('TourismeLocaleComponent', () => {
  let component: TourismeLocaleComponent;
  let fixture: ComponentFixture<TourismeLocaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismeLocaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourismeLocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
