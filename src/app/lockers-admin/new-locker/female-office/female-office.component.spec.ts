import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleOfficeComponent } from './female-office.component';

describe('FemaleOfficeComponent', () => {
  let component: FemaleOfficeComponent;
  let fixture: ComponentFixture<FemaleOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemaleOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
