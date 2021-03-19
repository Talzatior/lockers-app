import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedImportsModule } from '../../shared/shared-imports/shared-imports.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SpareKeyOutGenderComponent } from './spare-key-out-gender/spare-key-out-gender.component';
import { SpareKeyOutWomanComponent } from './spare-key-out-woman/spare-key-out-woman.component';
import { SpareKeyOutManComponent } from './spare-key-out-man/spare-key-out-man.component';



@NgModule({
  declarations: [SpareKeyOutGenderComponent, SpareKeyOutWomanComponent, SpareKeyOutManComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedImportsModule,
    FormsModule
  ]
})
export class SpareKeyOutModule { }
