import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareKeyOutManComponent } from './spare-key-out-man.component';

describe('SpareKeyOutManComponent', () => {
  let component: SpareKeyOutManComponent;
  let fixture: ComponentFixture<SpareKeyOutManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareKeyOutManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpareKeyOutManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
