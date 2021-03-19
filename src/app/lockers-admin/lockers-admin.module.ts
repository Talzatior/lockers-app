import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedImportsModule } from '../shared/shared-imports/shared-imports.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NewLockerModule } from './new-locker/new-locker.module';
import { LockerBackModule } from './locker-back/locker-back.module';
import { SpareKeyInModule } from './spare-key-in/spare-key-in.module';
import { SpareKeyOutModule } from './spare-key-out/spare-key-out.module';






@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    SharedImportsModule,
    FormsModule,
    NewLockerModule,
    LockerBackModule,
    SpareKeyInModule,
    SpareKeyOutModule
  ]
})
export class LockersAdminModule { }
