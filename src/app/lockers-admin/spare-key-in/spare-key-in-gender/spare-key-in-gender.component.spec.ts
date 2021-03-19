import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareKeyInGenderComponent } from './spare-key-in-gender.component';

describe('SpareKeyInGenderComponent', () => {
  let component: SpareKeyInGenderComponent;
  let fixture: ComponentFixture<SpareKeyInGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareKeyInGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpareKeyInGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
