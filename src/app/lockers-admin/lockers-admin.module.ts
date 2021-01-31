import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockerBackComponent } from './locker-back/locker-back.component';
import { SpareKeyOutComponent } from './spare-key-out/spare-key-out.component';
import { SpareKeyInComponent } from './spare-key-in/spare-key-in.component';
import { SharedImportsModule } from '../shared/shared-imports/shared-imports.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NewLockerModule } from './new-locker/new-locker.module';





@NgModule({
  declarations: [
    LockerBackComponent, 
    SpareKeyOutComponent, 
    SpareKeyInComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedImportsModule,
    FormsModule,
    NewLockerModule
  ]
})
export class LockersAdminModule { }
