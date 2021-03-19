import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareKeyInManComponent } from './spare-key-in-man.component';

describe('SpareKeyInManComponent', () => {
  let component: SpareKeyInManComponent;
  let fixture: ComponentFixture<SpareKeyInManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareKeyInManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpareKeyInManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
