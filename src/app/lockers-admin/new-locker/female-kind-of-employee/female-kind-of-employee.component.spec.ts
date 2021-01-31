import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleKindOfEmployeeComponent } from './female-kind-of-employee.component';

describe('FemaleKindOfEmployeeComponent', () => {
  let component: FemaleKindOfEmployeeComponent;
  let fixture: ComponentFixture<FemaleKindOfEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemaleKindOfEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleKindOfEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
