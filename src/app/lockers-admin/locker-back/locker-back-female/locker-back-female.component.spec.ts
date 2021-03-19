import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerBackFemaleComponent } from './locker-back-female.component';

describe('LockerBackFemaleComponent', () => {
  let component: LockerBackFemaleComponent;
  let fixture: ComponentFixture<LockerBackFemaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockerBackFemaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerBackFemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
