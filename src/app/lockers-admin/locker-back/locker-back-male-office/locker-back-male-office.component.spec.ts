import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerBackMaleOfficeComponent } from './locker-back-male-office.component';

describe('LockerBackMaleOfficeComponent', () => {
  let component: LockerBackMaleOfficeComponent;
  let fixture: ComponentFixture<LockerBackMaleOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockerBackMaleOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerBackMaleOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
