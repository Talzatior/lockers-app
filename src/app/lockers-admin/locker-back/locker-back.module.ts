import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockerBackGenderComponent } from './locker-back-gender/locker-back-gender.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedImportsModule } from 'src/app/shared/shared-imports/shared-imports.module';
import { LockerBackFemaleComponent } from './locker-back-female/locker-back-female.component';
import { LockerBackMaleKindComponent } from './locker-back-male-kind/locker-back-male-kind.component';
import { LockerBackMaleOfficeComponent } from './locker-back-male-office/locker-back-male-office.component';
import { LockerBackMaleMechanicComponent } from './locker-back-male-mechanic/locker-back-male-mechanic.component';




@NgModule({
  declarations: [LockerBackGenderComponent, LockerBackFemaleComponent, LockerBackMaleKindComponent, LockerBackMaleOfficeComponent, LockerBackMaleMechanicComponent, LockerBackFemaleComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedImportsModule,
    FormsModule
  ]
})
export class LockerBackModule { }
