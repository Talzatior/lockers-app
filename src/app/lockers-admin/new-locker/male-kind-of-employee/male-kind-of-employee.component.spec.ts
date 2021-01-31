import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleKindOfEmployeeComponent } from './male-kind-of-employee.component';

describe('MaleKindOfEmployeeComponent', () => {
  let component: MaleKindOfEmployeeComponent;
  let fixture: ComponentFixture<MaleKindOfEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaleKindOfEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaleKindOfEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
