import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleMechanicComponent } from './female-mechanic.component';

describe('FemaleMechanicComponent', () => {
  let component: FemaleMechanicComponent;
  let fixture: ComponentFixture<FemaleMechanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemaleMechanicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
