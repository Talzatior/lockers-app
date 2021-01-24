import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerBackComponent } from './locker-back.component';

describe('LockerBackComponent', () => {
  let component: LockerBackComponent;
  let fixture: ComponentFixture<LockerBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockerBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
