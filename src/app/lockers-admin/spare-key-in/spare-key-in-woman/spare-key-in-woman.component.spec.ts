import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareKeyInWomanComponent } from './spare-key-in-woman.component';

describe('SpareKeyInWomanComponent', () => {
  let component: SpareKeyInWomanComponent;
  let fixture: ComponentFixture<SpareKeyInWomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareKeyInWomanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpareKeyInWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
