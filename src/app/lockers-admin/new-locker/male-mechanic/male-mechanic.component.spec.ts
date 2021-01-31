import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleMechanicComponent } from './male-mechanic.component';

describe('MaleMechanicComponent', () => {
  let component: MaleMechanicComponent;
  let fixture: ComponentFixture<MaleMechanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaleMechanicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaleMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
