import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerBackGenderComponent } from './locker-back-gender.component';

describe('LockerBackGenderComponent', () => {
  let component: LockerBackGenderComponent;
  let fixture: ComponentFixture<LockerBackGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockerBackGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerBackGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
