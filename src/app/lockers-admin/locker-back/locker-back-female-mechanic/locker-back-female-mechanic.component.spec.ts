import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerBackFemaleMechanicComponent } from './locker-back-female-mechanic.component';

describe('LockerBackFemaleMechanicComponent', () => {
  let component: LockerBackFemaleMechanicComponent;
  let fixture: ComponentFixture<LockerBackFemaleMechanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockerBackFemaleMechanicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerBackFemaleMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
