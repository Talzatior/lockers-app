import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerBackFemaleOfficeComponent } from './locker-back-female-office.component';

describe('LockerBackFemaleOfficeComponent', () => {
  let component: LockerBackFemaleOfficeComponent;
  let fixture: ComponentFixture<LockerBackFemaleOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockerBackFemaleOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerBackFemaleOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
