import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleOfficeComponent } from './male-office.component';

describe('MaleOfficeComponent', () => {
  let component: MaleOfficeComponent;
  let fixture: ComponentFixture<MaleOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaleOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaleOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
