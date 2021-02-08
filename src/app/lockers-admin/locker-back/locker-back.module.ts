import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockerBackGenderComponent } from './locker-back-gender/locker-back-gender.component';
import { LockerBackComponent } from './locker-back.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedImportsModule } from 'src/app/shared/shared-imports/shared-imports.module';
import { LockerBackFemaleKindComponent } from './locker-back-female-kind/locker-back-female-kind.component';
import { LockerBackFemaleOfficeComponent } from './locker-back-female-office/locker-back-female-office.component';
import { LockerBackFemaleMechanicComponent } from './locker-back-female-mechanic/locker-back-female-mechanic.component';
import { LockerBackMaleKindComponent } from './locker-back-male-kind/locker-back-male-kind.component';
import { LockerBackMaleOfficeComponent } from './locker-back-male-office/locker-back-male-office.component';
import { LockerBackMaleMechanicComponent } from './locker-back-male-mechanic/locker-back-male-mechanic.component';



@NgModule({
  declarations: [LockerBackGenderComponent, LockerBackComponent, LockerBackFemaleKindComponent, LockerBackFemaleOfficeComponent, LockerBackFemaleMechanicComponent, LockerBackMaleKindComponent, LockerBackMaleOfficeComponent, LockerBackMaleMechanicComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedImportsModule,
    FormsModule
  ]
})
export class LockerBackModule { }
