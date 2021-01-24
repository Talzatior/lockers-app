import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareKeyOutComponent } from './spare-key-out.component';

describe('SpareKeyOutComponent', () => {
  let component: SpareKeyOutComponent;
  let fixture: ComponentFixture<SpareKeyOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareKeyOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpareKeyOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
