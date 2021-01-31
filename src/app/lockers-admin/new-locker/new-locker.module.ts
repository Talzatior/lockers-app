import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderComponent } from './gender/gender.component';
import { SharedImportsModule } from 'src/app/shared/shared-imports/shared-imports.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaleKindOfEmployeeComponent } from './male-kind-of-employee/male-kind-of-employee.component';
import { FemaleKindOfEmployeeComponent } from './female-kind-of-employee/female-kind-of-employee.component';
import { MaleMechanicComponent } from './male-mechanic/male-mechanic.component';
import { MaleOfficeComponent } from './male-office/male-office.component';
import { FemaleOfficeComponent } from './female-office/female-office.component';
import { FemaleMechanicComponent } from './female-mechanic/female-mechanic.component';



@NgModule({
  declarations: [GenderComponent, MaleKindOfEmployeeComponent, FemaleKindOfEmployeeComponent, MaleMechanicComponent, MaleOfficeComponent, FemaleOfficeComponent, FemaleMechanicComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedImportsModule,
    FormsModule
  ]
})
export class NewLockerModule { }
