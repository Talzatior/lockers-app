import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareKeyOutWomanComponent } from './spare-key-out-woman.component';

describe('SpareKeyOutWomanComponent', () => {
  let component: SpareKeyOutWomanComponent;
  let fixture: ComponentFixture<SpareKeyOutWomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareKeyOutWomanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpareKeyOutWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
