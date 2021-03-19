import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareKeyOutGenderComponent } from './spare-key-out-gender.component';

describe('SpareKeyOutGenderComponent', () => {
  let component: SpareKeyOutGenderComponent;
  let fixture: ComponentFixture<SpareKeyOutGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareKeyOutGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpareKeyOutGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
