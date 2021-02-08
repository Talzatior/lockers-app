import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerBackMaleKindComponent } from './locker-back-male-kind.component';

describe('LockerBackMaleKindComponent', () => {
  let component: LockerBackMaleKindComponent;
  let fixture: ComponentFixture<LockerBackMaleKindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockerBackMaleKindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerBackMaleKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
