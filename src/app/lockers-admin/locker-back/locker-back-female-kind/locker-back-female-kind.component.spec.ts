import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerBackFemaleKindComponent } from './locker-back-female-kind.component';

describe('LockerBackFemaleKindComponent', () => {
  let component: LockerBackFemaleKindComponent;
  let fixture: ComponentFixture<LockerBackFemaleKindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockerBackFemaleKindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerBackFemaleKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
