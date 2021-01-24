import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLockerComponent } from './new-locker/new-locker.component';
import { LockerBackComponent } from './locker-back/locker-back.component';
import { SpareKeyOutComponent } from './spare-key-out/spare-key-out.component';
import { SpareKeyInComponent } from './spare-key-in/spare-key-in.component';



@NgModule({
  declarations: [NewLockerComponent, LockerBackComponent, SpareKeyOutComponent, SpareKeyInComponent],
  imports: [
    CommonModule
  ]
})
export class LockersAdminModule { }
