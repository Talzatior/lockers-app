import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerBackMaleMechanicComponent } from './locker-back-male-mechanic.component';

describe('LockerBackMaleMechanicComponent', () => {
  let component: LockerBackMaleMechanicComponent;
  let fixture: ComponentFixture<LockerBackMaleMechanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockerBackMaleMechanicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerBackMaleMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
