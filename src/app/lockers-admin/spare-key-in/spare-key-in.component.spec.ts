import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareKeyInComponent } from './spare-key-in.component';

describe('SpareKeyInComponent', () => {
  let component: SpareKeyInComponent;
  let fixture: ComponentFixture<SpareKeyInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareKeyInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpareKeyInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
